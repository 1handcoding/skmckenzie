<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
  import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { hiContrastOn } = storeToRefs(store);
  const { showAccessOptions } = storeToRefs(store);
  const { toggleShowAccessOptionsOn, toggleHiContrastOn } = store;
</script>

<template>
  <div id="accessibility" class="colorNegative" :class="{hcmNegative: hiContrastOn}">
    <button aria-controls="Show accessibility Options" aria-pressed="false" @click.stop="toggleShowAccessOptionsOn()">Click for Accessibility Options </button>
    <div  v-if="showAccessOptions" id="accessoptions" class="colorAlpha">
      <span>Hi-Contrast Enabled:{{hiContrastOn}}</span><button @click.stop="toggleHiContrastOn()">Toggle Hi-Contrast Mode</button>
    </div>
  </div>
</template>
<style>
#accessibility {
  width: 100%;
}
</style>
