"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupImageLazyLoading = exports.setupBus = void 0;
var bus_1 = require("./communication/bus");
var imageLazyLoading_1 = require("./directive/imageLazyLoading");
/**
 * @description 全局挂载bus
 * @param { App<Element> } app app实例
 * @returns { void }
 */
function setupBus(app) {
    app.config.globalProperties.$bus = new bus_1.Bus();
}
exports.setupBus = setupBus;
/**
 * @description 全局挂在图片懒加载指令
 * @param { App<Element> } app app实例
 * @returns { void }
 */
function setupImageLazyLoading(app) {
    app.directive('imageLazyLoading', imageLazyLoading_1.ImageLazyLoading);
}
exports.setupImageLazyLoading = setupImageLazyLoading;
