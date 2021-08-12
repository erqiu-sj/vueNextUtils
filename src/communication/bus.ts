/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:28:29
 * @LastEditTime : 2021-08-12 10:54:00
 * @FilePath     : /vue-next-utils/src/communication/bus.ts
 * @Description  :
 */
import { getCurrentInstance, ComponentInternalInstance } from 'vue'

class Bus {
	eventList: Map<string, Function[]>;
	constructor() {
		this.eventList = new Map();
	}
	// 发布
	emit<T extends unknown>(key: string, val: T) {
		// 如果事件中心不存在该事件回调直接抛错
		if (!this.eventList.has(key)) return;
		const eventCb: Function[] = this.eventList.get(key) || [];
		eventCb.forEach((fn) => fn(val));
	}
	// 订阅
	on<T>(key: string, cb: (res: T) => void) {
		if (!this.eventList.get(key)) {
			this.eventList.set(key, []);
		}
		this.eventList.get(key)?.push(cb);
	}
	// 销毁
	off(key: string) {
		if (!this.eventList.has(key)) return;
		this.eventList.delete(key);
	}
}

function useBus(that?: ComponentInternalInstance): Bus {
	const instance = getCurrentInstance();
	// @ts-ignore
	if (that) return that?.proxy?.$bus
	// @ts-ignore
	return instance?.proxy?.$bus;
}

export { Bus, useBus }