/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:45:53
 * @LastEditTime : 2021-08-12 11:02:53
 * @FilePath     : /vue-next-utils/src/lifeCycle/useDestroyBus.ts
 * @Description  :
 */
import { onBeforeUnmount } from '@vue/runtime-core'
import { useBus } from '../communication/bus'
/**
 * @description 手动调用销毁bus中的事件回调函数
 * @param { string | string[] } destroyKey
 * @return { boolean | never } 是否销毁成功,如果参数类型不统一则会报错
 */
function useDestroyBus(destroyKey: string[]): boolean | never;
function useDestroyBus(destroyKey: string): boolean | never;
function useDestroyBus(destroyKey: unknown): boolean | never {
	const bus = useBus();
	// 不等于
	if (typeof destroyKey !== 'string' && !((destroyKey as unknown as object) instanceof Array))
		throw new Error('useDestroyBus函数需要一个字符串或一个数组');
	if (typeof destroyKey === 'string') {
		bus.off(destroyKey);
		return true;
	}
	(destroyKey as string[]).forEach((keyItem) => bus.off(keyItem));
	return true;
}
/**
 * @description 不必手动调用，在卸载函数时自动清除事件回调
 * @param { string | string[] } destroyKey
 * @return { void | never }
 */
function useDestroyBusOnUnmounted(destroyKey: string[]): void | never;
function useDestroyBusOnUnmounted(destroyKey: string): void | never;
function useDestroyBusOnUnmounted(destroyKey: unknown): void | never {
	onBeforeUnmount(() => {
		/**
		 * @description 这看似冗余的操作是为了不让编辑器报错
		 */
		typeof destroyKey === 'string' && useDestroyBus(destroyKey);
		destroyKey instanceof Array && useDestroyBus(destroyKey);
	});
}
export { useDestroyBus, useDestroyBusOnUnmounted }