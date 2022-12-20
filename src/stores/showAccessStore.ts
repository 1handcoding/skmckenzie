import { defineStore } from 'pinia'

export type ShowAccessState = {
  showAccessOn: boolean;
}

export const useShowAccessStore = defineStore({
  id: 'showAccessOn',
  state: () => ({
      showAccessOn: false,
    } as ShowAccessState),  
  actions: {
    toggleShowAccessOn() {
      this.showAccessOn = !this.showAccessOn
  },
  getters: {
    getShowAccessOn(state:  ShowAccessState): boolean {
      return state.showAccessOn;
    }
  },
  }
})
