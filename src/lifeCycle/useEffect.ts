/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:19:41
 * @LastEditTime : 2021-08-12 10:27:43
 * @FilePath     : /vue-next-utils/src/lifeCycle/useEffect.ts
 * @Description  : useEffect
 */

import { watch, onMounted, onBeforeUpdate, onBeforeUnmount, WatchSource } from '@vue/runtime-core';
type MultiWatchSources = (WatchSource<unknown> | object)[];

type baseCb = () => void;
type withDestroyCb = () => () => void;

/**
 * @description 模拟react的Effect唯一的不同是改函数是同步执行的,return函数内获取的值也是当前的状态不是prev的值
 * @see https://react.docschina.org/docs/hooks-reference.html#useeffect
 * @param { baseCb | withDestroyCb } cb
 * @param { undefined | null | [] | MultiWatchSources[]  } deps
 * @return { void }
 */
function useEffect(cb: baseCb | withDestroyCb, deps: undefined): void;
function useEffect(cb: baseCb | withDestroyCb, deps: []): void;
function useEffect(cb: withDestroyCb, deps: MultiWatchSources[]): void;
function useEffect(cb: baseCb, deps: MultiWatchSources[]): void;
function useEffect(cb: baseCb, deps: unknown[]): void;
function useEffect(cb: unknown, deps: unknown): void {
	let backupCb: null | baseCb = null;
	onMounted(async () => {
		backupCb = typeof cb === 'function' && (await cb());
	});
	onBeforeUnmount(async () => {
		backupCb && (await backupCb());
	});
	if (!deps) {
		//  undefined | null
		onBeforeUpdate(() => {
			typeof cb === 'function' && cb();
		});
		return;
	}
	// 没有依赖的情况下
	if (!(deps as []).length) return;
	watch(deps as MultiWatchSources[], () => {
		typeof cb === 'function' && cb();
	});
}

export {
	useEffect
}
