<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { useAccessOptionsStore } from '@/stores/accessOptionsStore';
import { storeToRefs } from 'pinia';
import { useSpeechSynthesis } from '@vueuse/core';
import DropContent from '@/components/DropContent.vue'
import DropDown from '@/components/DropDown.vue'
import { provide, ref } from 'vue'



const store = useAccessOptionsStore();
const { hiContrastOn, bigButtonsOn } = storeToRefs(store);
const { toggleHiContrastOn, toggleBigButtonsOn } = store;

const bypassOpen = ref(false)
const showAccess = ref(false)
let hcmToggle = ref(false)
const bigButtonToggle = ref(false)

let togIconA = "toggle_off"
let togIconB = "toggle_off"

const speech1 = new SpeechSynthesisUtterance('Hi-contrast is enabled')
const speech2 = new SpeechSynthesisUtterance('Hi-contrast is disabled')
const speech3 = new SpeechSynthesisUtterance('Button size set to default')
const speech4 = new SpeechSynthesisUtterance('Button size set to large')


function toggleBypass() {
  bypassOpen.value = !bypassOpen.value
}
function accessOptions() {
  showAccess.value = !showAccess.value;
}
function speakHCM() {
  if (hcmToggle.value) { window.speechSynthesis.speak(speech1) }
  else if (!hcmToggle.value) { window.speechSynthesis.speak(speech2) }
}
function toggleHCM() { 
  hcmToggle.value = !hcmToggle.value;
  if (hcmToggle.value) {
    togIconA="toggle_on"
  }
  else {
    togIconA="toggle_off"
  }
}
function toggleBigButtons() { 
  bigButtonToggle.value = !bigButtonToggle.value;
  if (bigButtonToggle.value) {
    togIconB="toggle_on"
  }
  else {
    togIconB="toggle_off"
  }
}
</script>

<template>
  <div id="topBar">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <ul id="menubar">
      <ul>
          <DropDown>
            <template #toggler>
              <button type="button" :aria-expanded="bypassOpen" aria-controls="id_bypass_links" @click.stop="toggleBypass()">Bypass Links</button>
            </template>
            <DropContent>
              <template #dropContent>
                <div id="nav_menu" v-if="bypassOpen " class="dropDown colorPositive">
                  <li><a href="homeSection">Home</a></li>
                </div>
              </template>
            </DropContent>
          </DropDown>
      </ul>
      <ul>
        <DropDown>
          <template #toggler>
            <button role="switch" type="button" :aria-expanded="showAccess" aria-controls="show_accessibility_options" @click.stop="accessOptions">Accessibility Options</button>
          </template>
            <DropContent>
          <template #dropContent>
            <div id="id_access_menu" v-if="showAccess" class="dropDown colorPositive">
              <ul>
                <button @click.stop="toggleHiContrastOn(); toggleHCM(); speakHCM()" :aria-pressed="`${hcmToggle}`">Toggle Hi-Contrast</button>
                <span class="material-symbols-outlined" :class="{toggleOn: hcmToggle}">{{togIconA}}</span>
              </ul>
              <ul>
                <button @click.stop="toggleBigButtonsOn(); toggleBigButtons()" :aria-pressed="`${bigButtonToggle}`">Toggle Big Buttons</button>
                <span class="material-symbols-outlined"  :class="{toggleOn: bigButtonToggle}">{{togIconB}}</span>
              </ul>
            </div>
          </template>
        </DropContent>
        </DropDown>
      </ul>
    </ul>
  </div>
</template>
<style>

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

.toggleOn {
  font-variation-settings:
  'FILL' 1;
}

#menubar {
  width: 100vw;
  height: 24px;
  margin-top: 0px;
  margin-bottom: auto;
  padding: 3px;
  display: inline-flex;
  justify-content: space-around;
  background-color: #660330;
  border: 5px solid orange;
  z-index: 999;
}

.dropDown {
  float: inline-start;
  padding: 4px;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0;
  background-color: none;
  z-index: 999;
}
</style>
