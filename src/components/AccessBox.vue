<script setup lang="ts">
  import { useHiContrastStore } from "@/stores/hiContrastStore";
  import { useShowAccessStore } from "@/stores/showAccessStore";
  import { storeToRefs } from 'pinia';
  const hiContrastStore = useHiContrastStore();
  const showAccessStore = useShowAccessStore();
  const { toggleHiContrast, hiContrastOn } = storeToRefs(hiContrastStore);
  const { toggleShowAccessOn, showAccessOn } = storeToRefs(showAccessStore);
  showAccessStore.fill();
</script>
<template>
    <button @v-model="toggleShowAccessOn()">Click for Accessibility Options </button>
    <div v-if="showAccessState" id="accessibility" class="colorAlpha">
            <span>Hi-Contrast Enabled:{{hiContrastOn}}</span><button @onClick="toggleHiContrast()">Toggle Hi-Contrast Mode</button>
    </div>
</template>
<style>
#accessibility {
  display: flex;
  justify-content: flex-start;
}
</style>
