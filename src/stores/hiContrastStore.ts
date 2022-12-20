import { defineStore } from 'pinia'

export type HiContrastState = {
  hiContrastOn: boolean;
}

export const useHiContrastStore = defineStore({
  id: 'hiContrastOn',
  state: () => ({
      hiContrastOn: false,
    } as HiContrastState),  
  actions: {
    toggleHiContrast() {
      this.hiContrastOn = !this.hiContrastOn

  },
  getters: {
    getHiContrastOn(state:  HiContrastState): boolean {
      return state.hiContrastOn;
    }
  },
  }
})
