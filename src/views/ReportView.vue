<script setup lang="ts">
import { useAutoDerivedStore } from "@/stores/autoDerivedStore";
  import { storeToRefs } from 'pinia';
  const store = useAutoDerivedStore();
  const { pixelRatio, preferredContrast, preferredColor, isSupported, orientation, angle} = storeToRefs(store);
</script>

<template>
   <ul>Auto-Derived Values for Page Styling</ul>
      <li>Current Pixel Ratio:{{pixelRatio}}</li>
      <li>Preferred Contrast{{preferredContrast}}</li>
      <li>Orientation: {{isSupported}}, {{orientation}}, {{angle}}</li>
      <li>Color Scheme: {{preferredColor}}</li>
</template>

