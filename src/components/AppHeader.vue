<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { hiContrastOn } = storeToRefs(store);

</script>
<template>
  <header id="banner" class="colorNegative" :class="{hcmNegative: hiContrastOn}">
      <h1 id="main-title" role="heading" aria-level="1">Accessibility Using Vue.js</h1>
  </header>
</template>
<style scoped>
  #banner {
    margin: 0 auto;
    text-align: center;
    width: 65%;
    min-height: 50px;
    border-radius: 3em;
    position: relative;
    z-index: -1;
  }
  #main-title {
    align-self: center;
    margin: 0 auto;
    padding: 1rem 0rem;
  }

</style>
