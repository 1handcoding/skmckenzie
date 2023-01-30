<script setup lang="ts">
import { ref } from 'vue';
let heading = ref('')
let shown = ref(-1)
let expIcon = "expand_more";

function toggleExpand(heading: string, shown: number) {
    shown = -1*(shown);
  if (shown.valueOf()) {
    expIcon="expand_less"
  }
  else {
    expIcon="expand_more"
  }
}

</script>
<template>
    <div class="secBar colorNegative">
        <h2 id="heading" ref=heading>Home</h2>
        <button type="button" id=name class="secButton" @click.stop="toggleExpand(heading, shown)">Home
          <span class="material-symbols-rounded">{{expIcon}}</span>
        </button>
    </div>
    </template>