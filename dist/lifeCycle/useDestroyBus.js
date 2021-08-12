"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDestroyBusOnUnmounted = exports.useDestroyBus = void 0;
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:45:53
 * @LastEditTime : 2021-08-12 11:02:53
 * @FilePath     : /vue-next-utils/src/lifeCycle/useDestroyBus.ts
 * @Description  :
 */
var runtime_core_1 = require("@vue/runtime-core");
var bus_1 = require("../communication/bus");
function useDestroyBus(destroyKey) {
    var bus = bus_1.useBus();
    // 不等于
    if (typeof destroyKey !== 'string' && !(destroyKey instanceof Array))
        throw new Error('useDestroyBus函数需要一个字符串或一个数组');
    if (typeof destroyKey === 'string') {
        bus.off(destroyKey);
        return true;
    }
    destroyKey.forEach(function (keyItem) { return bus.off(keyItem); });
    return true;
}
exports.useDestroyBus = useDestroyBus;
function useDestroyBusOnUnmounted(destroyKey) {
    runtime_core_1.onBeforeUnmount(function () {
        /**
         * @description 这看似冗余的操作是为了不让编辑器报错
         */
        typeof destroyKey === 'string' && useDestroyBus(destroyKey);
        destroyKey instanceof Array && useDestroyBus(destroyKey);
    });
}
exports.useDestroyBusOnUnmounted = useDestroyBusOnUnmounted;
