<template>
  <div id="navbar" role="navigation">
    <button class="tab" @click="$router.push('alphaview')">Alpha</button>
    <button class="tab" @click="$router.push('betaview')">Beta</button>
    <button class="tab" @click="$router.push('deltaview')">Delta</button>
    <button class="tab" @click="$router.push('gammaview')">Colors</button>
  </div>
  <div id="content">
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

.tab {
  color: #fb2627;
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
  border: 5px solid #0d33cc;
  border-bottom: 3px solid #0d33cc;
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
</style>
