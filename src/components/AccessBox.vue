<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore"
  import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { accessOptionsList } = storeToRefs(store)
  const { toggleAccessibilityOption, fetchOptions } = store;
  fetchOptions();

</script>
<template>
  <div class="colorBeta" :class="{ monoBeta: hiContrastMode }">
    <button @click.stop="toggleAccessibilityOption(showAccessOptions)">
      Show Accessibility Options
    </button>
  </div>
  <div v-if="showAccessOptions" id="accessibility" class="colorAlpha" :class="{ monoAlpha: hcmOn }">
    <label for="hicontrast">Enable Hi-Contrast Mode</label>
    <input type="checkbox" id="hicontrast" class="checkbox" @click.stop="toggleAccessibilityOption(hiContrastMode)"/>
    <p class="colorAlpha">{{ hcmOn }}</p>
  </div>
</template>
<style>
#accessibility {
  display: flex;
  justify-content: flex-start;
}
</style>
