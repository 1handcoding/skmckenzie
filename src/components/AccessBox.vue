<script setup lang="ts">
  import { useHiContrastStore } from "@/stores/hiContrastStore";
  import { useShowAccessStore } from "@/stores/showAccessStore";
  import { storeToRefs } from 'pinia';
  const hiContrastStore = useHiContrastStore();
  const showAccessStore = useShowAccessStore();
  const toggleHiContrastOn = hiContrastStore;
  const toggleShowAccessOn = showAccessStore;
  const { hiContrastOn } = storeToRefs(hiContrastStore);
  const { showAccessOn } = storeToRefs(showAccessStore);
  return {showAccessOn, hiContrastOn}

</script>
<template>
    <button @v-model="toggleShowAccessOn()">Click for Accessibility Options </button>
    <div v-if="showAccessOn" id="accessibility" class="colorAlpha">
            <span>Hi-Contrast Enabled:{{hiContrastOn}}</span><button @onClick="toggleHiContrastOn()">Toggle Hi-Contrast Mode</button>
    </div>
</template>
<style>
#accessibility {
  display: flex;
  justify-content: flex-start;
}
</style>
