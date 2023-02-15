<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import AccessBar from "@/components/AccessBar.vue";
import AppHeader from "@/components/AppHeader.vue";
import FooterBox from "@/components/FooterBox.vue";
import { storeToRefs } from 'pinia';
import { useAutoDerivedStore } from "@/stores/autoDerivedStore";
import expandBox from "@/components/expandBox.vue";
const autoStore = useAutoDerivedStore();
const pixelRatio = storeToRefs(autoStore)
const msg ="it works"


</script>

<template>
  <div id="masterbox">
    <div id="topper">
      <access-bar />
    </div>
    <div id="bannerBox">
      <app-header />
    </div>
    <div id="mainContent">
    <expandBox />
    </div>  
    <div id="footer">
    <FooterBox />
    </div>
  </div>
  
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  width: 100vw;
  height: fit-content;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
}

#topper {
  z-index: 999
}
#masterbox {
  position: absolute;
  top: 0;
  margin: auto;
  border: 0.2em solid fuchsia;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 90vw;
}

#bannerBox {
  width: 90%;
  border: .25em solid blueviolet;
  margin: 1.5em auto;
  z-index: 0;
}

#mainContent {
  width: 90%;
  border: .25em solid blueviolet;
  margin: 0 auto;
}

.button {
  min-width: 24px;
  min-height: 24px;
  margin: 5px;
  border-radius: 0.5em;
}

.bigButton {
  min-width: 48px;
  min-height: 48px;
  margin: 5px;
  border-radius: 0.5em;
}

.colorPositive {
  color: #660330;
  background-color: #CDFFFE;
  border-color: #660330;
}

.colorNegative {
  color:#CDFFFE;
  background-color: #660330;
  border-color: #CDFFFE;
}
.hcmPositive {
  color: black;
  background-color: whitesmoke;
  border-color: black;
}
.hcmNegative {
  color: whitesmoke;
  background-color: black;
  border-color: whitesmoke;
}

[role="heading"] {
    justify-self: center;
  }
</style>
