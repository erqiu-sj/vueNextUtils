"use strict";
/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:38:40
 * @LastEditTime : 2021-08-12 10:49:38
 * @FilePath     : /vue-next-utils/src/directive/ImageLazyLoading.ts
 * @Description  :
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageLazyLoading = void 0;
var ImageLazyLoading = {
    beforeMount: function (el, bind) {
        el.$lazyImage = bind.value;
    },
    mounted: function (el) {
        var io = new IntersectionObserver(function (entries) {
            var realSrc = el.$lazyImage;
            entries[0].isIntersecting && realSrc && (el.src = realSrc);
        });
        el.$ioImageLazyLoading = io;
        io.observe(el);
    },
    updated: function (el, binding) {
        el.$lazyImage = binding.value;
    },
    unmounted: function (el) {
        el.$ioImageLazyLoading.disconnect();
    },
};
exports.ImageLazyLoading = ImageLazyLoading;
