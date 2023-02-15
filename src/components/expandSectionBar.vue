<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
const toggleHome = "toggleHome()"
const toggleAbout = "toggleAbout()"
const toggleMethods = "toggleMethods()"
const toggleNext = "toggleNext()"
const homeSection = "home_section"
const aboutSection = "about_section"
const methodsSection = "methodology"
const nextSection = "next_steps"
const homeLabel = "Home";
const aboutLabel = "About";
const methodsLabel = "Methodology";
const nextLabel = "Next Steps";
</script>

<template>
  <div>
    <slot name="homeSection" :idTag="homeSection" :labelName="homeLabel" />
    <slot name="aboutSection" :idTag="aboutSection" :labelName="aboutLabel" /> 
    <slot name="methodsSection" :idTag="methodsSection" :labelName="methodsLabel" /> 
    <slot name="nextSection" :idTag="nextSection" :labelName="nextLabel" />  
  </div>
</template>

<style>

</style>