<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import expandSectionBar from './expandSectionBar.vue';
import { ref} from 'vue';
import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
import { storeToRefs } from 'pinia';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useTitle, set, useMouseInElement, useCurrentElement } from '@vueuse/core';
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
    <div>
      <expandSectionBar>
        <template #homeSection="homeSectionProps">
          <button id={{homeSectionProps.idTag}} 
                  role="button" class="secBar colorNegative" 
                  :class="{ hcmNegative: hiContrastOn }" 
                  aria-controls="show_home" 
                  @click.prevent="toggleHome()" 
                  :aria-expanded="`${showHome}`">
                  <h2 id="nextSection" class="colorNegative" :class="{hcmNegative: hiContrastOn}">{{homeSectionProps.labelName}}</h2>
                  <span class="material-symbols-rounded iconSpan">{{expIcon}}</span>
          </button>
          <div v-show="showHome" class="dropDown" :class="{ hcmPositive: hiContrastOn }">
            <p>Welcome to my accessibility demonstration</p>
          </div>
        </template>
        <br />
        <template #aboutSection="aboutSectionProps">
          <button id={{aboutSectionProps.idTag}} 
                  role="button" class="secBar colorNegative button" 
                  :class="{ hcmNegative: hiContrastOn, bigButton: bigButtonsOn }" 
                  aria-controls="show_about" 
                  @click.prevent="toggleAbout()" 
                  :aria-expanded="`${showAbout}`">
                  <h2 id="nextSection" class="colorNegative" :class="{hcmNegative: hiContrastOn}">{{aboutSectionProps.labelName}}</h2>
                  <span class="material-symbols-rounded iconSpan">{{expIcon2}}</span>
          </button>
          <div v-show="showAbout" class="dropDown">
            <p>Hi, I'm Kyle McKenzie, and I want to be an accessibility engineer. On this page, I'm experimenting with implementing better accessibility in Vue.js. As the usage of reactive frameworks is rapidly increasing, it is vital that accessibility practices keep pace. Reactive frameworks currently have an appallingly poor reputation for ease of access that must be addressed.</p>
          </div>
        </template>
        <br />
        <template #methodsSection="methodsSectionProps">
          <button id={{methodsSectionProps.idTag}} 
                  role="button" class="secBar colorNegative" 
                  :class="{ hcmNegative: hiContrastOn }" 
                  aria-controls="show_methodology" 
                  @click.prevent="toggleMethods()" 
                  :aria-expanded="`${showMethods}`">
                  <h2 id="nextSection" class="colorNegative" :class="{hcmNegative: hiContrastOn}">{{methodsSectionProps.labelName}}</h2>
                  <span class="material-symbols-rounded iconSpan">{{expIcon3}}</span>
          </button>
          <div v-show="showMethods" class="dropDown">
            <h2 id="methodsSection" class="colorNegative" :class="{hcmNegative: hiContrastOn}">Methods</h2>
            <h2 aria-level="3">Current</h2>

            <h3 aria-level="4">Conditional Rendering</h3>
            <p>Conditional rendering can be used to toggle visibility. Here it is employed to initially hide advanced accessibility features. This allows accessibility options to be anchored at the top of the page, where they are easy to locate, without obstructing the page flow for users who don't want or need them</p>

            <h3 aria-level="4">Dynamic Classes</h3>
            <p>Vue's ability to seamlessly alter CSS classes is leveraged to alter the rendering of individual page elements. This is helpful as some accessibility needs conflict, for example:
            while many users benefit from having larger buttons that are easier to see and press, a user with a limited field of vision or a user who uses screen enlargement might find the larger buttons disruptive. 
            Being able to alternate between one or more options for an element helps the site meet a variety of needs simultaneously with a minimum of code.</p>

            <h3 aria-level="4">useTitle from vueUse</h3>
            <p> The title is dynamically updated with the name of the current section</p>

            <h3 aria-level="4">window.SpeechSynthesis</h3>
            <p>Custom audio alerts are currently being added to toggle functions that are not automatically announced via screen reader. Implementation could potentially switch to useSpeechSynthesis from vueUse, but it was more difficult to implement initially.</p>

            <h3 aria-level="3">Auto-Derived Values from Browser</h3>
            <p>Various values and preferences are accessed using a variety of vueuse components. These can then be accessed from their own Pinia store and used to inform custom styling preferences throughout the site</p>
            <ul>Currently Implemented, Styling Pending</ul>
            <li>useDevicePixelRatio is be used to respond to user zoom level and screen-enlargement</li>
            <li>useDeviceOrientation can be used to better style the page based on the device orientation.
              While almost universally helpful to users, this is especially beneficial to some disabled users.
              To maximize the benefit, this can, in theory, then be configured to work in conjunction with other settings</li>

            <h3 aria-level="3" class="subheader">No Longer Used</h3>
              <h3 aria-level="4">Vue Router</h3>
                <p>The page formerly used Vue Router to approximate the ARIA <a href="https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html">tablist format</a>. 
              While this allowed the page to present in a familiar format, this could be better accomplished using a combination of dynamic classes and conditional rendering. 
              With Vue Router couldn't properly manage focus or accommodate the recommended bypass links as easily, and "accordion-style" seems to be more popular and familiar.
                </p>
          </div>
        </template>
        <br />
        <template #nextSection="nextSectionProps">
          <button id={{nextSectionProps.idTag}} role="button" 
                  class="secBar colorNegative" 
                  :class="{ hcmNegative: hiContrastOn }" 
                  aria-controls="show_home" 
                  @click.prevent="toggleNext()" 
                  :aria-expanded="`${showNext}`">
                  <h2 id="nextSection" class="colorNegative" :class="{hcmNegative: hiContrastOn}">{{nextSectionProps.labelName}}</h2>
                  <span class="material-symbols-rounded iconSpan">{{expIcon4}}</span>
          </button>
          <div v-show="showNext" class="dropDown">
            <ul>
              <li>Correct useTitle for use with "accordion-style" page, using vueUse functionality to report which element is currently targeted by the user.</li>
              <li>Expand custom color styling to auto-load based on color preferences set in browser</li>
              <li>Test modifying custom button classes automatically in response to zoom level, device orientation</li>
              <li>Use vueUse to add accessible alerts/audio feedback</li>
              <li>Make methods page to display only one set of methods at a time, nested router?</li>
              <li>Create usable functions to manage focus</li>
              <li>Rectify all the ARIA labels, preferably by using dynamic HTML attributes</li>
              <li>Add CSS styling for all the new content</li>
              <li>Reduce the amount of essentially redundant code even more w/ dynamic templating</li>
            </ul>
        </div>
        </template>
      </expandSectionBar>
    </div>
  </div>
</template>

<style>
.secBar {
  width: 25%;
  margin: 0 auto;
  border-radius: 0.5em;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
p {
  width: 95%;
  color: #660330;
  margin: 0 auto;
}
.iconSpan {
  font-size: 32px;
}
.secButton {
  background-color: transparent;
  border-width: 0;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  padding: 0;
}
.subheader {
  text-decoration: underline;
}
</style>