"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupScrollScreen = exports.setupImageLazyLoading = exports.setupBus = void 0;
var bus_1 = require("./communication/bus");
var imageLazyLoading_1 = require("./directive/imageLazyLoading");
var scrollScreen_1 = require("./directive/scrollScreen");
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
/**
 * @description 全局挂在页面滚动指令
 * @param { App<Element> } app app实例
 */
function setupScrollScreen(app) {
    app.directive('scrollScreen', scrollScreen_1.scrollScreen);
}
exports.setupScrollScreen = setupScrollScreen;
