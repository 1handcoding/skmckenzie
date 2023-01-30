<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
const props = defineProps({
  name: String,
  funct: String,
  idProp: String,
  showProp: Boolean,
})

</script>
<template >
  <button type="button" class="secButton" id="idProp" :aria-pressed=showProp @click.stop="`toggleExpand(${funct}, ${showProp})`">{{ name }}
  </button>
</template>