<script setup lang="ts">
import AccessBox from "@/components/AccessBox.vue";
import AppHeader from "@/components/AppHeader.vue";
import NavBar from "@/components/NavBar.vue";
import FooterBox from "@/components/FooterBox.vue";

</script>

<template>
  <div id="masterbox">
    <access-box />
    <app-header />
    <nav-bar />
    <footer-box />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#mastercontainer {
  color: whitesmoke;
  background-color: #660330;
  min-width: 100%;
  min-height: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

h2 {
  color: #660330
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
