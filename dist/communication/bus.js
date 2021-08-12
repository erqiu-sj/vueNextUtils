"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBus = exports.Bus = void 0;
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:28:29
 * @LastEditTime : 2021-08-12 10:54:00
 * @FilePath     : /vue-next-utils/src/communication/bus.ts
 * @Description  :
 */
var runtime_core_1 = require("@vue/runtime-core");
var Bus = /** @class */ (function () {
    function Bus() {
        this.eventList = new Map();
    }
    // 发布
    Bus.prototype.emit = function (key, val) {
        // 如果事件中心不存在该事件回调直接抛错
        if (!this.eventList.has(key))
            return;
        var eventCb = this.eventList.get(key) || [];
        eventCb.forEach(function (fn) { return fn(val); });
    };
    // 订阅
    Bus.prototype.on = function (key, cb) {
        var _a;
        if (!this.eventList.get(key)) {
            this.eventList.set(key, []);
        }
        (_a = this.eventList.get(key)) === null || _a === void 0 ? void 0 : _a.push(cb);
    };
    // 销毁
    Bus.prototype.off = function (key) {
        if (!this.eventList.has(key))
            return;
        this.eventList.delete(key);
    };
    return Bus;
}());
exports.Bus = Bus;
function useBus(that) {
    var _a, _b;
    var instance = runtime_core_1.getCurrentInstance();
    // @ts-ignore
    if (that)
        return (_a = that === null || that === void 0 ? void 0 : that.proxy) === null || _a === void 0 ? void 0 : _a.$bus;
    // @ts-ignore
    return (_b = instance === null || instance === void 0 ? void 0 : instance.proxy) === null || _b === void 0 ? void 0 : _b.$bus;
}
exports.useBus = useBus;
