/*
 * @Author       : 邱狮杰
 * @Date         : 2021-08-12 10:18:40
 * @LastEditTime : 2021-08-12 15:03:45
 * @FilePath     : /vue-next-utils/src/index.ts
 * @Description  :
 */
import { useBus } from './communication/bus'
import { ImageLazyLoading } from './directive/imageLazyLoading'
import { useDestroyBus, useDestroyBusOnUnmounted } from './lifeCycle/useDestroyBus'
import { useEffect } from './lifeCycle/useEffect'
import { setupBus, setupImageLazyLoading, setupScrollScreen } from './register'
import type { scrollScreenOptionsTypes } from './directive/scrollScreen'
export { useBus, ImageLazyLoading, useDestroyBus, useDestroyBusOnUnmounted, useEffect, setupBus, setupImageLazyLoading, setupScrollScreen }
export type { scrollScreenOptionsTypes }