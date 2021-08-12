"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupImageLazyLoading = exports.setupBus = exports.useEffect = exports.useDestroyBusOnUnmounted = exports.useDestroyBus = exports.ImageLazyLoading = exports.useBus = void 0;
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:18:40
 * @LastEditTime : 2021-08-12 11:38:16
 * @FilePath     : /vue-next-utils/src/index.ts
 * @Description  :
 */
var bus_1 = require("./communication/bus");
Object.defineProperty(exports, "useBus", { enumerable: true, get: function () { return bus_1.useBus; } });
var imageLazyLoading_1 = require("./directive/imageLazyLoading");
Object.defineProperty(exports, "ImageLazyLoading", { enumerable: true, get: function () { return imageLazyLoading_1.ImageLazyLoading; } });
var useDestroyBus_1 = require("./lifeCycle/useDestroyBus");
Object.defineProperty(exports, "useDestroyBus", { enumerable: true, get: function () { return useDestroyBus_1.useDestroyBus; } });
Object.defineProperty(exports, "useDestroyBusOnUnmounted", { enumerable: true, get: function () { return useDestroyBus_1.useDestroyBusOnUnmounted; } });
var useEffect_1 = require("./lifeCycle/useEffect");
Object.defineProperty(exports, "useEffect", { enumerable: true, get: function () { return useEffect_1.useEffect; } });
var register_1 = require("./register");
Object.defineProperty(exports, "setupBus", { enumerable: true, get: function () { return register_1.setupBus; } });
Object.defineProperty(exports, "setupImageLazyLoading", { enumerable: true, get: function () { return register_1.setupImageLazyLoading; } });
