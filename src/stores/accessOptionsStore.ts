import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccessOptionsStore = defineStore('accessOptionsStore', () => {
    const showAccessOptions  = ref(false);
    const hiContrastOn = ref(false);
    const bigButtonsOn = ref(false)
    
    function toggleShowAccessOptionsOn() {
        showAccessOptions.value = !showAccessOptions.value;
        }
    function toggleHiContrastOn() {
        hiContrastOn.value = !hiContrastOn.value;
        return { hiContrastOn }
        }
    function toggleBigButtonsOn() {
        bigButtonsOn.value = !bigButtonsOn.value;
        return { bigButtonsOn }
        }
    return { showAccessOptions, hiContrastOn, bigButtonsOn, toggleShowAccessOptionsOn, toggleHiContrastOn, toggleBigButtonsOn }
})
