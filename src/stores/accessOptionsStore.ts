import { defineStore } from 'pinia'

export const useAccessOptionsStore = defineStore("accessOptionsList", {
  state: () => ({
    accessOptionsList: [
      {optionName: "showAccessOptions", id: 0, isEnabled: false},
      {optionName: "hiContrastMode", id: 1, isEnabled: false}] as AccessOption[],
    id:0,
  }),
  actions: {
    toggleAccessibilityOption(idToFind: number) {
      const accessOption = this.accessOptionsList.find((obj) => obj.id === idToFind);
        if (accessOption) {
          accessOption.isEnabled = !accessOption.isEnabled;
          return accessOption.isEnabled
        }  
      },
    fetchOptions() {
      return this.accessOptionsList
    }
  }}
)
