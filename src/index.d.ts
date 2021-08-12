/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:26:00
 * @LastEditTime : 2021-08-12 11:05:49
 * @FilePath     : /vue-next-utils/src/index.d.ts
 * @Description  :
 */
import { WatchSource } from '@vue/runtime-core'
import { App } from '@vue/runtime-dom'


declare class Bus {
	eventList: Map<string, Function[]>;
	// 发布
	emit<T extends unknown>(key: string, val: T): void
	// 订阅
	on<T>(key: string, cb: (res: T) => void): void
	// 销毁
	off(key: string): void
}

export type MultiWatchSources = (WatchSource<unknown> | object)[];
export type baseCb = () => void;
export type withDestroyCb = () => () => void;

export declare function useEffect(cb: baseCb | withDestroyCb, deps: undefined): void;
export declare function useEffect(cb: baseCb | withDestroyCb, deps: []): void;
export declare function useEffect(cb: withDestroyCb, deps: MultiWatchSources[]): void;
export declare function useEffect(cb: baseCb, deps: MultiWatchSources[]): void;
export declare function useEffect(cb: baseCb, deps: unknown[]): void;

export declare function useBus(): Bus

export declare function setupBus(app: App<Element>): void

export declare function setupImageLazyLoading(app: App<Element>): void


export declare function useDestroyBus(destroyKey: string[]): boolean | never;
export declare function useDestroyBus(destroyKey: string): boolean | never;
export declare function useDestroyBus(destroyKey: unknown): boolean | never


export declare function useDestroyBusOnUnmounted(destroyKey: string[]): void | never;
export declare function useDestroyBusOnUnmounted(destroyKey: string): void | never;
export declare function useDestroyBusOnUnmounted(destroyKey: unknown): void | never