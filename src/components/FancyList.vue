<script setup>
import { ref } from 'vue'

const props = defineProps(['api-url', 'per-page'])


</script>

<template>
<button vslot:id>
</button>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
  }
  li {
    padding: 5px 20px;
    margin: 10px;
    background: #fff;
  }
</style>