<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
  import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { hiContrastOn } = storeToRefs(store);
</script>
<template>
  <div id="footer" class="colorNegative" :class="{hcmNegative: hiContrastOn}" translate="no">
    <p>2022 S. Kyle McKenzie | <a href="mailto:email@example.com" translate="no">onehandcoding@gmail.com</a> | <a rel="me" href="
https://fosstodon.org/@onehandcoding" translate="no">@onehandcoding@fosstodon.org</a></p>
  </div>
</template>

<style scoped>
#footer {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
}

#footer p {
  font-size: 1.2rem;
}
</style>
