<script setup lang="ts">
import AccessBox from "@/components/AccessBox.vue";
import AppHeader from "@/components/AppHeader.vue";
import NavBar from "@/components/NavBar.vue";
import FooterBox from "@/components/FooterBox.vue";
import { useHiContrastStore } from "./stores/hiContrastStore";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hiContrastStore = useHiContrastStore();
</script>

<template>
  <div id="masterbox">
    <access-box />
    <app-header />
    <nav-bar />
    <footer-box />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

}
body {
  text-align: center;
  width: 100%;
  height: 100%;
  background-color:#660330;
  background-color: palevioletred;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

}
.colorPositive {
  color: #660330;
  background-color: #FEFBCF;
  border-color: #660330;
}
.colorNegative {
  color:#FEFBCF;
  background-color: #660330;
  border-color: #FEFBCF;
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
