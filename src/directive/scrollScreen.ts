/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 14:23:12
 * @LastEditTime : 2021-08-12 15:33:13
 * @FilePath     : /vue-next-utils/src/directive/scrollScreen.ts
 * @Description  : scrollScreen
 */
import type { Directive } from 'vue'

interface scrollScreenOptionsTypes {
	left: number
	top: number,
	run: boolean
}
function scrollRun(options?: scrollScreenOptionsTypes) {
	window.scrollTo({
		...options,
		behavior: 'smooth'
	})
}
const scrollScreen: Directive = {
	mounted(el, bind) {
		bind.value.run && scrollRun(bind.value)
	},
	updated(el, bind) {
		bind.value.run && scrollRun(bind.value)
	}
}

export { scrollScreen }
export type { scrollScreenOptionsTypes }


