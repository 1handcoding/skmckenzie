<script setup lang="ts">
import AccessBar from "@/components/AccessBar.vue";
import AppHeader from "@/components/AppHeader.vue";
import MainContent from "@/components/MainContent.vue";
import FooterBox from "@/components/FooterBox.vue";

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
      <main-content />
    </div>
    <footer-box />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Montserrat, Arial, sans-serif;
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
  margin: 0;
  border: 0.2rem solid fuchsia;
  display: flex;
  flex-direction: column;
  width: 100vw;
}

#bannerBox {
  width: 90%;
  border: .25rem solid blueviolet;
  margin: 1.5rem auto;
  z-index: 0;
}

#mainContent {
  width: 90%;
  border: .25rem solid blueviolet;
  margin: 0 auto;
}

.button {
  min-width: 24px;
  min-height: 24px;
  margin: 5px;
  border-radius: 0.5rem;
}

.bigButton {
  min-width: 48px;
  min-height: 48px;
  margin: 5px;
  border-radius: 0.5rem;
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
