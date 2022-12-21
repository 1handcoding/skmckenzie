import { defineStore } from 'pinia'

export const useHiContrastStore = defineStore({
  id: 'hiContrastOn',
  state: () => ({
    hiContrastOn: false
  }),
  getters: {
  },
  actions: {
    toggleHiContrastOn() {
      this.hiContrastOn = !this.hiContrastOn
    },

  }
})
