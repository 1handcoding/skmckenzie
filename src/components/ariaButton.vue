<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
const props = defineProps({
  name: String,
  funct: String,
  boop: String,
  showProp: Boolean,
})

</script>
<template >
  <button type="button" class="secButton colorNegative bigButton" :id=boop :aria-expanded=showProp>{{boop}}</button>
</template>