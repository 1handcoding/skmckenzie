<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { useAccessOptionsStore } from '@/stores/accessOptionsStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSpeechSynthesis } from '@vueuse/core'


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
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <ul id="menubar" class="colorNegative" :class="{hcmNegative: hiContrastOn}">
        <ul><button type="button" :aria-expanded="bypassOpen" aria-controls="id_bypass_links" @click.stop="toggleBypass()">Bypass Links</button>
            <ul id="id_bypass_links" class="colorPositive" :class="{hcmPositive: hiContrastOn}" v-if="bypassOpen">
                <ul>
                    <a href="homeSection">Home</a>
                </ul>
                <ul>
                    <a href="aboutSection">About</a>
                </ul>
                <ul>
                    <a href="methodsSection">Methods</a>
                </ul>
                <ul>
                    <a href="nextSection">Next Steps</a>
                </ul>
            </ul>
          </ul>
        <ul><button type="button" :aria-expanded="showAccess" aria-controls="show_accessibility_options" @click.stop="accessOptions">Accessibility Options</button>
                <ul id="id_about_menu" v-if="showAccess">
                    <li>
                        <button @click.stop="toggleHiContrastOn(); toggleHCM(); speakHCM()" :aria-pressed="`${hcmToggle}`">Toggle Hi-Contrast</button><span class="material-symbols-outlined" :class="{toggleOn: hcmToggle}">{{togIconA}}</span>
                    </li>
                    <li>
                        <button @click.stop="toggleBigButtonsOn(); toggleBigButtons()" :aria-pressed="`${bigButtonToggle}`">Toggle Big Buttons</button><span class="material-symbols-outlined" :class="{toggleOn: bigButtonToggle}">{{togIconB}}</span>
                    </li>
                </ul>
              </ul>
    </ul>
  </div>
</template>
<style>
#menubar {
  min-width: 100%;
  display: inline-flex;
  justify-content: space-around;
}
#menubar>.button {
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
</style>
