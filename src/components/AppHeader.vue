<script setup lang="ts">
</script>
<template>
  <header id="banner">
      <h1 role="heading" aria-label="element.innerHTML" aria-level="1">Template Site</h1>
    </header>
    <a href="#maincontent">Skip to main content</a>
</template>
<style>
  #banner {
    border: solid 5px #660330;
    display: flex;
    flex-flow: row wrap;
    align-self: center;
    text-align: center;
    background-color: #800080;
    min-width: 50%;
    min-height: 50px;
    border-radius: 3em;
  }

  [role="heading"] {
    justify-self: center;
  }
</style>
