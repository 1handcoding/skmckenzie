<script setup lang="ts">
import AccessBar from "@/components/AccessBar.vue";
import AppHeader from "@/components/AppHeader.vue";
import MainContent from "@/components/MainContent.vue";
import FooterBox from "@/components/FooterBox.vue";

</script>

<template>
  <div id="masterbox">
    <access-bar />
    <app-header />
    <main-content />
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

}
#masterbox {
  min-width: 100vw;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color:whitesmoke;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
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

  #contentbox {
  border: solid 5px;
  width: 95%;
  border-radius: 1em;
  justify-content: center;
  display: flex;
  flex-flow: column wrap;
}

h3{
  text-decoration: underline;
}

#secBar{
  min-width: 85%;
  border: solid 5px;
  display: inline-flex;
  flex-flow: row nowrap;
  justify-self: center;
  text-align: center;
}
</style>
