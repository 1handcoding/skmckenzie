<script setup lang="ts">
import { useAccessOptionsStore } from '@/stores/accessOptionsStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
const store = useAccessOptionsStore();
const { hiContrastOn, bigButtonsOn } = storeToRefs(store);
const { toggleHiContrastOn, toggleBigButtonsOn } = store;
const bypassOpen = ref(false)
const showAccess = ref(false)
const hcmToggle = ref(false)

function toggleBypass() {
  bypassOpen.value = !bypassOpen.value
}
function accessOptions() {
  showAccess.value = !showAccess.value;
}

</script>

<template>
  <div>
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
                        <button @click.stop="toggleHiContrastOn()" :aria-pressed="`${hcmToggle}`">Toggle Hi-Contrast</button><div id="toggle" class="toggleoff" :class="{toggleon: hiContrastOn}"></div>
                    </li>
                    <li>
                        <button @click.stop="toggleBigButtonsOn()" :aria-pressed="`${bigButtonsOn}`">Toggle Big Buttons</button><div id="toggle" class="toggleoff" :class="{toggleon: bigButtonsOn}"></div>
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
.toggleon {
  background-color: #660330;
}
</style>
