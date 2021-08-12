/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:30:40
 * @LastEditTime : 2021-08-12 10:50:56
 * @FilePath     : /vue-next-utils/src/register.ts
 * @Description  :
 */
import type { App } from '@vue/runtime-dom'
import { Bus } from './communication/bus'
import { ImageLazyLoading } from './directive/imageLazyLoading'

/**
 * @description 全局挂载bus
 * @param { App<Element> } app app实例
 * @returns { void }
 */
export function setupBus(app: App<Element>): void {
	app.config.globalProperties.$bus = new Bus()
}

/**
 * @description 全局挂在图片懒加载指令
 * @param { App<Element> } app app实例
 * @returns { void }
 */
export function setupImageLazyLoading(app: App<Element>): void {
	app.directive('imageLazyLoading', ImageLazyLoading);
}
