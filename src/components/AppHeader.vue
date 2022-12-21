<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
  import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { hiContrastOn } = storeToRefs(store);
</script>
<template>
  <header id="banner" class="colorPositive" :class="{hcmPositive: hiContrastOn}">
      <h1 role="heading" aria-label="element.innerHTML" aria-level="1">Template Site</h1>
  </header>
  <a href="#maincontent">Skip to main content</a>

</template>
<style scoped>
  #banner {
    border: solid 5px;
    display: flex;
    flex-flow: row wrap;
    align-self: center;
    text-align: center;
    min-width: 50%;
    min-height: 50px;
    border-radius: 3em;
  }
 
</style>
