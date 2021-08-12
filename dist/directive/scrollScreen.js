"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollScreen = void 0;
function scrollRun(options) {
    window.scrollTo(__assign(__assign({}, options), { behavior: 'smooth' }));
}
var scrollScreen = {
    mounted: function (el, bind) {
        bind.value.run && scrollRun(bind.value);
    },
    updated: function (el, bind) {
        bind.value.run && scrollRun(bind.value);
    }
};
exports.scrollScreen = scrollScreen;
