/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:38:40
 * @LastEditTime : 2021-08-12 15:33:05
 * @FilePath     : /vue-next-utils/src/directive/ImageLazyLoading.ts
 * @Description  :
 */

import type { Directive } from 'vue';

const ImageLazyLoading: Directive = {
	beforeMount(el, bind) {
		el.$lazyImage = bind.value;
	},
	mounted(el) {
		const io = new IntersectionObserver((entries) => {
			const realSrc = el.$lazyImage;
			entries[0].isIntersecting && realSrc && (el.src = realSrc);
		});
		el.$ioImageLazyLoading = io;
		io.observe(el);
	},
	updated(el, binding) {
		el.$lazyImage = binding.value;
	},
	unmounted(el) {
		el.$ioImageLazyLoading.disconnect();
	},
};



export { ImageLazyLoading }
