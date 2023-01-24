<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
  import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { hiContrastOn, bigButtonsOn } = storeToRefs(store);
  const { showAccessOptions } = storeToRefs(store);
  const { toggleShowAccessOptionsOn, toggleHiContrastOn, toggleBigButtonsOn } = store;
</script>

<template>
  <div id="accessibility" class="colorNegative" :class="{hcmNegative: hiContrastOn}">
    <div id='topbuttons'>
      <button class="button" :class="{bigButton: bigButtonsOn}" aria-controls="Show accessibility Options" :aria-pressed="showAccessOptions" @click.stop="toggleShowAccessOptionsOn()">Click for Accessibility Options </button>
      <a href="#maincontent" class="button" :class="{bigButton: bigButtonsOn}" aria-controls="Skip to main">Skip to Main Content</a>
    </div>
   <div v-if="showAccessOptions" id="accessoptions" class="colorBeta">
    <button @click.stop="toggleHiContrastOn()">Toggle Hi-Contrast</button><div id="toggle" class="toggleoff" :class="{toggleon: hiContrastOn}"></div>
    <button @click.stop="toggleBigButtonsOn()">Toggle Big Buttons</button><div id="toggle" class="toggleoff" :class="{toggleon: bigButtonsOn}"></div>
    </div>
  
  </div>
</template>
<style>
#accessibility {
  width: 100%;
}
#topbuttons {
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
}
#topbuttons>.button {
  background-color: whitesmoke;
  color: #660330;
  padding: 3px;
  font-size: 32;
}
#accessoptions {
  border: 5px solid;
  display: flex;
  flex-direction: row;
  float: start;
}
#toggle {
border-radius: 0.e5em;
width: 1.5em}
.toggleoff {
  background-color: gray;
}
.toggleon {
  background-color: #660330;
}
</style>
