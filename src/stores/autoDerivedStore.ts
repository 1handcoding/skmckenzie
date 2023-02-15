/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineStore } from 'pinia'
import { useDevicePixelRatio, usePreferredColorScheme, useScreenOrientation, usePreferredContrast, usePreferredReducedMotion} from '@vueuse/core';

export const useAutoDerivedStore = defineStore('autoDerivedStore', () => {
  const { pixelRatio } = useDevicePixelRatio()
  const preferredColor = usePreferredColorScheme()
  const {
    isSupported,
    orientation,
    angle,
  } = useScreenOrientation()
  const preferredContrast = usePreferredContrast()
  const preferredMotion = usePreferredReducedMotion()
  
    return { pixelRatio }
})
