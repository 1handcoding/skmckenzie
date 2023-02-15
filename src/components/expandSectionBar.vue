<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
import { storeToRefs } from 'pinia';
import { useTitle, set, useMouseInElement, useCurrentElement } from '@vueuse/core';
import ariaButton from '@/components/ariaButton.vue'
const store = useAccessOptionsStore();
const { hiContrastOn, bigButtonsOn } = storeToRefs(store);
let showHome = ref(false);
let showAbout = ref(false);
let showMethods = ref(false);
let showNext = ref(false);
let expIcon = "expand_more";
let expIcon2 = "expand_more";
let expIcon3 = "expand_more";
let expIcon4 = "expand_more";

const title = useTitle();
function toggleHome() { 
  showHome.value = !showHome.value;
  document.getElementById("homeSection")!.focus();
  const title = useTitle('Home', { titleTemplate: '%s | Kyle McKenzie' });
  if (showHome.value) {
    expIcon="expand_less"
  }
  else {
    expIcon="expand_more"
  }
}
function toggleAbout() { 
  showAbout.value = !showAbout.value;
  const title = useTitle('About', { titleTemplate: '%s | Kyle McKenzie' });
  if (showAbout.value) {
    expIcon2="expand_less"
  }
  else {
    expIcon2="expand_more"
  }
}
function toggleMethods() { 
  showMethods.value = !showMethods.value;
  const title = useTitle('Methodology', { titleTemplate: '%s | Kyle McKenzie'});
  if (showMethods.value) {
    expIcon3="expand_less"
  }
  else {
    expIcon3="expand_more"
  }
}
function toggleNext() { 
  showNext.value = !showNext.value;
  const title = useTitle('Next Steps', { titleTemplate: '%s | Kyle McKenzie' });
  if (showNext.value) {
    expIcon4="expand_less"
  }
  else {
    expIcon4="expand_more"
  }
}
</script>

<template>
  <div>
    <button @click="toggler">{{ buttonName }}
    <span>{{iconName}}</span>
    </button>
  </div>
</template>

<style>

</style>