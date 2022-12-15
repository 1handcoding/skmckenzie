<script setup lang="ts">
import { useAccessOptionsStore } from "@/stores/accessOptionsStore"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { storeToRefs } from 'pinia';
const optionsStore = useAccessOptionsStore();
const { accessOptionsList, getOptionIsEnabled } = optionsStore;
const getOptionIsEnabled(hcmOn)
</script>
<template>
  <header>
    <h1 id="banner" role="banner">banner</h1>
    <div v-for="accessOption in accessOptionsList" :key='accessOption.id'>
      <p>{{ accessOption.optionName}}</p>
    </div>
  </header>
</template>
<style>
header {
  display: flex;
  justify-self: center;
  text-align: center;
  background-color: #800080;
  max-width: 80%;
  min-height: 50px;
  border-radius: 5;
}
h1 {
  color: #fff;
}
</style>
