<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
  import { storeToRefs } from 'pinia';
  import { useTitle, set } from '@vueuse/core';
  import { ref } from 'vue';

  const store = useAccessOptionsStore();
  const { hiContrastOn } = storeToRefs(store);
  const focusedPanel = ref('maincontent');
  console.log(focusedPanel.value);
  const tabpanel = focusedPanel.value;

  function setFocusedPanel(panelID: string) {
    set (focusedPanel, panelID)
    console.log(focusedPanel.value)
  }
  
  function updateTitle(subpage: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const title = useTitle(subpage, { titleTemplate: '%s | Accessibility w/Vue' })
  }
</script>

<template>
    <div id="navigation" role="tablist" aria-labelledby="navigation" class="manual">
      <button 
        id="main" 
        type="button" 
        ref="tab1" class="colorPositive focus" 
        :class="{hcmPositive: hiContrastOn}" 
        role="tab" aria-selected="false" 
        aria-controls="panel-1" 
        aria-setsize=”4″ aria-posinset=”1″ 
        @click="updateTitle('Alpha'); $router.push('alphaview'); setFocusedPanel('alphaview')">
        Alpha
      </button>

      <button id="tab-2" 
        type="button" class="colorPositive" 
        :class="{hcmPositive: hiContrastOn}" 
        role="tab" aria-selected="false" 
        aria-controls="panel-2" 
        aria-setsize=”4″ aria-posinset=”2″ 
        @click="updateTitle('Beta'); $router.push('betaview'); setFocusedPanel('betaview')">
        Beta
      </button>

      <button 
        id="tab-3" 
        type="button" 
        class="colorPositive" 
        :class="{hcmPositive: hiContrastOn}" 
        role="tab" aria-selected="false" 
        aria-controls="panel-3" 
        aria-setsize=”4″ 
        aria-posinset=”3″ 
        @click="updateTitle('Gamma'); $router.push('gammaview'); setFocusedPanel('gammaview')">
        <span class="focus">Gamma</span>
      </button>

      <button 
        id="tab-4" 
        type="button" 
        class="colorPositive" 
        :class="{hcmPositive: hiContrastOn}" 
        role="tab" aria-selected="false" 
        aria-controls="panel-4" 
        aria-setsize=”4″ 
        aria-posinset=”4″ 
        @click="updateTitle('Delta'); $router.push('deltaview'); setFocusedPanel('deltaview')">
        <span class="focus">Delta</span>
      </button>
    </div>
  <div id="contentbox" class="colorPositive" :class="{hcmPositive: hiContrastOn}">
    <router-view />
  </div>
</template>

<style>
#navigation {
  display: inline-flex;
  align-content: center;
  justify-content: space-between;
  margin: auto auto;
  height: 30px;
  flex-shrink: 0;
  flex-flow: row wrap;
  list-style-type: none;
  width: 90%;
  margin-top: 1.8rem;
  margin-bottom: -3.5px;
  z-index: 0;
}

[role="tab"]{
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  max-height: 2.2rem;
  min-width: 0.5rem;
  max-width: 20%;
  flex-grow: 1;
  flex-basis: 30px;
  margin-bottom: 2px;
  padding: 2px 2px;
  border: 5px solid;
  border-bottom: 3px solid;
  cursor: pointer;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  overflow: hide;
}

.tab .a {
  text-align: center;
  vertical-align: center;
  color: #fb2627;
  opacity: 1;
  overflow-x: hidden;
  font-size: 48px;
}

button:hover {
  transition: 0.5s;
  text-decoration: none;
  box-shadow: 1px;
  border-bottom: none;
}

a:hover {
  text-decoration: none;
}

button:pressed {
  border-bottom: none;
  text-decoration: underline;
}

</style>
