<script setup lang="ts">
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore";
  import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { hiContrastOn } = storeToRefs(store);
</script>

<template>
    <div id="navbar" role="tablist" aria-labelledby="navigation" class="manual">
      <button id="main" type="button" class="colorPositive" :class="{hcmPositive: hiContrastOn}" role="tab" aria-selected="false" aria-controls="main-view" @click="$router.push('alphaview')">
        <span id="homeTab" class="focus">Alpha</span>
      </button>

      <button id="tab-2" type="button" class="colorPositive" :class="{hcmPositive: hiContrastOn}" role="tab" aria-selected="false" aria-controls="panel-2" @click="$router.push('betaview')">
        <span class="focus">Beta</span>
      </button>

      <button id="tab-3" type="button" class="colorPositive" :class="{hcmPositive: hiContrastOn}" role="tab" aria-selected="false" aria-controls="panel-3" @click="$router.push('deltaview')">
        <span class="focus">Gamma</span>
      </button>

      <button id="tab-4" type="button" class="colorPositive" :class="{hcmPositive: hiContrastOn}" role="tab" aria-selected="false" aria-controls="panel-4" @click="$router.push('gammaview')">
        <span class="focus">Delta</span>
      </button>
    </div>
  <div id="maincontent" class="colorPositive" :class="{hcmPositive: hiContrastOn}">
    <router-view />
  </div>
</template>

<style>
#navbar {
  display: inline-flex;
  align-content: center;
  justify-content: space-between;
  margin: auto auto;
  height: 30px;
  flex-shrink: 0;
  flex-flow: row wrap;
  list-style-type: none;
  width: 85%;
  margin-top: 1.8rem;
  border: 1px solid purple;
}

[role="tab"]{
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
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

button:active {
  border-bottom: none;
  text-decoration: underline;
}

#maincontent {
  border: solid 5px;
  width: 100%;
  border-radius: 1em;
  justify-content: center;
  display: flex;
  flex-flow: column wrap;
}
</style>
