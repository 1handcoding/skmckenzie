<script setup lang="ts">
  import { useAutoDerivedStore } from "@/stores/autoDerivedStore";
  import { storeToRefs } from 'pinia';
  const store = useAutoDerivedStore();
  const { pixelRatio, preferredContrast, preferredColor, isSupported, orientation, angle} = storeToRefs(store);
</script>
<template>
  <div class="maincontent" role="tabpanel" id="maincontent" aria-labelledby="AboutPanel">
    <h2 role="heading" aria-level="2">Home</h2>
    <ul>Auto-Derived Values for Page Styling</ul>
      <li>Current Pixel Ratio:{{pixelRatio}}</li>
      <li>Preferred Contrast{{preferredContrast}}</li>
      <li>Orientation: {{isSupported}}, {{orientation}}, {{angle}}</li>
      <li>Color Scheme: {{preferredColor}}</li>

  </div>
</template>
