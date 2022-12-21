<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
  import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { hiContrastOn } = storeToRefs(store);
  const { showAccessOptions } = storeToRefs(store);
  const { toggleShowAccessOptionsOn, toggleHiContrastOn } = store;
</script>

<template>
  <div class="colorNegative" :class="{hcmNegative: hiContrastOn}">
    <button @click.stop="toggleShowAccessOptionsOn()">Click for Accessibility Options </button>
    <div  v-if="showAccessOptions" id="accessibility" class="colorAlpha">
      <span>Hi-Contrast Enabled:{{hiContrastOn}}</span><button @click.stop="toggleHiContrastOn()">Toggle Hi-Contrast Mode</button>
    </div>
  </div>
</template>
<style>
#accessibility {
  display: flex;
  justify-content: flex-start;
}
</style>
