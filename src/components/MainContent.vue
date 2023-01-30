<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref } from 'vue';
import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
import { storeToRefs } from 'pinia';
import ariaButton from '@/components/ariaButton.vue'
const store = useAccessOptionsStore();
const { hiContrastOn } = storeToRefs(store);

let expIcon = "expand_more";
let expIcon2 = "expand_more";
let expIcon3 = "expand_more";
let expIcon4 = "expand_more";
let showHome = ref(false);
let showAbout = ref(false);
let showMethods = ref(false);
let showNext = ref(false);

const url= "url"

function toggleHome() { 
  showHome.value = !showHome.value;
  document.getElementById("homeSection")!.focus();
  if (showHome.value) {
    expIcon="expand_less"
  }
  else {
    expIcon="expand_more"
  }
}
function toggleAbout() { 
  showAbout.value = !showAbout.value;
  if (showAbout.value) {
    expIcon2="expand_less"
  }
  else {
    expIcon2="expand_more"
  }
}
function toggleMethods() { 
  showMethods.value = !showMethods.value;
  if (showMethods.value) {
    expIcon2="expand_less"
  }
  else {
    expIcon2="expand_more"
  }
}
function toggleNext() { 
  showNext.value = !showNext.value;
  if (showNext.value) {
    expIcon2="expand_less"
  }
  else {
    expIcon2="expand_more"
  }
}
function toggleExpand(nameExp: string, showProp: boolean) {
  if (nameExp) {
    expIcon2="expand_less"
  }
  else {
    expIcon2="expand_more"
  }
}
</script>
<template>
  
  <div class="expandyBox">
    <div class="secBar; colorNegative" :class="{ hcmNegative: hiContrastOn }">
      <h2 id="homeSection" ref="homeSection">Home</h2>
      <ariaButton name="Home" id="homeButton" @click.stop="toggleHome()"/><span class="material-symbols-rounded">{{ expIcon }}</span>
    </div>
    <div v-show="showHome" class="secAnchor; colorPositive" :class="{ hcmPositive: hiContrastOn }">
      <p>Welcome to my accessibility demonstration</p>
    </div>
  </div>
  <div class="expandyBox">
    <div class="colorNegative" :class="{ hcmNegative: hiContrastOn }">
      <h2 id="aboutSection">About</h2>
      <button type="button" :aria-expanded="`${showAbout}`" aria-controls="show_about" class="secButton"
          @click.stop="toggleAbout()">About<span class="material-symbols-rounded">{{ expIcon2 }}</span>
          </button>
    </div>
    <div v-show="showAbout">
      
      <p>Welcome to my accessibility demonstration</p>
    </div>
  </div>
  <div class="expandyBox">
    <div>
      <button type="button" :aria-expanded="`${showMethods}`" aria-controls="show_methods" class="secButton" @click.stop="toggleMethods()">
        Methods
        <span class="material-symbols-rounded">{{expIcon3}}</span>
      </button>
    </div>
    <div v-show="showMethods">
      <h2 id="methodsSection" class="colorNegative" :class="{hcmNegative: hiContrastOn}">Methods</h2>
      <h2 aria-level="3">Current</h2>

      <h3 aria-level="4">Conditional Rendering</h3>
      <p>Conditional rendering can be used to toggle visibility. Here it is employed to initially hide advanced accessibility features. This allows accessibility options to be anchored at the top of the page, where they are easy to locate, without obstructing the page flow for users who don't want or need them</p>

      <h3 aria-level="4">Dynamic Classes</h3>
      <p>Vue's ability to seamlessly alter CSS classes is leveraged to alter the rendering of individual page elements. 
      While many users benefit from having larger buttons that are easier to see and press, 
      a user with a limited field of vision or who uses screen enlargement might find the larger buttons disruptive. 
      Being able to alternate between one or more options for an element helps the site meet a variety of needs simultaneously with a minimum of code.</p>

      <h3 aria-level="4">useTitle from vueUse</h3>
      <p>While vueUse provides a tremendous number of useful functions, the site currently uses only useTitle. The title is dynamically updated with the name of the current tab panel.</p>



      <h3 aria-level="3">Auto-Derived Values from Browser</h3>
      <p>Various values and preferences are accessed using a variety of vueuse components. These can then be accessed from their own Pinia store and used to inform custom styling preferences throughout the site</p>
      <ul>Currently Implemented, Styling Pending</ul>
      <li>useDevicePixelRatio is be used to respond to user zoom level and screen-enlargement</li>
      <li>useDeviceOrientation can be used to better style the page based on the device orientation.
        While almost universally helpful to users, this is especially beneficial to some disabled users.
        To maximize the benefit, this can, in theory, then be configured to work in conjunction with other settings</li>

      <h3 aria-level="3">No Longer Used</h3>
        <h3 aria-level="4">Vue Router</h3>
          <p>The page formerly used Vue Router to approximate the ARIA <a href="https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html">tablist format</a>. 
        While this allowed the page to present in a familiar format, this could be better accomplished using a combination of dynamic classes and conditional rendering. 
        With Vue Router couldn't properly manage focus or accommodate the recommended bypass links as easily, and "accordion-style" seems to be more popular and familiar.
          </p>
    </div>
  </div>
  <div class="expandyBox">
    <div>
      <button type="button" :aria-expanded="`${showNext}`" aria-controls="show_next_steps" class="secButton" @click.stop="toggleNext()">
        Next Steps
        <span class="material-symbols-rounded">{{expIcon4}}</span>
      </button>
    </div>
    <div v-show="showNext">
      <h2 id="nextSection" class="colorNegative" :class="{hcmNegative: hiContrastOn}">Next Steps</h2>
      <ul>
        <li>Correct useTitle for use with "accordion-style" page</li>
        <li>Expand custom color styling to auto-load based on color preferences set in browser</li>
        <li>Test modifying custom button classes automatically in response to zoom level, device orientation</li>
        <li>Use vueUse to add accessible alerts/audio feedback</li>
        <li>Make methods page to display only one set of methods at a time, nested router?</li>
        <li>Create usable functions to manage focus</li>
        <li>Rectify all the ARIA labels, preferably by using dynamic HTML attributes</li>
        <li>Add CSS styling for all the new content</li>
        <li>Reduce the amount of essentially redundant code w/ more dynamic templating</li>
      </ul>
    </div>
  </div>
</template>