<template>
  <container id="main">
    <h2>Colors:</h2>
    <div class="color-container">
      <div class="color-panel thundergray">
        <p class="color-label">Thundercloud Gray</p>
        <p class="color-hex">#494f46</p>
      </div>
      <div class="color-panel purple">
        <p class="color-label">Purple</p>
        <p class="color-hex">#800080</p>
      </div>
      <div class="color-panel pthaloblue">
        <p class="color-label">Pthalo Blue</p>
        <p class="color-hex">#000f89</p>
      </div>
      <div class="color-panel eightiespink">
        <p class="color-label">80s Pink</p>
        <p class="color-hex">#F55397</p>
      </div>
      <div class="color-panel eightiesblue">
        <p class="color-label">80s Blue</p>
        <p class="color-hex">#00abbf</p>
      </div>
      <div class="color-panel whitesmoke">
        <p class="color-label">White Smoke</p>
        <p class="color-hex">#f5f5f5</p>
      </div>
    </div>
    <img src="https://placekitten.com/600/150" />
  </container>
</template>
<style>
.color-panel {
  display: inline-block;
  width: 32%;
  text-align: center;
  margin: 20px auto;
  min-height: 100px;
  font-family: "Montserrat", sans-serif;
}

.color-container {
  width: 80%;
  border: 3px chartreuse solid;
  margin: 0px auto;
}

.thundergray {
  background-color: #494f46;
  color: #fff;
}

.pthaloblue {
  background-color: #000f89;
  color: #fff;
}
.purple {
  background-color: #800080;
  color: #fff;
}

.whitesmoke {
  background-color: #f5f5f5;
}

.eightiesblue {
  background-color: #00abbf;
  color: #fff;
}

.eightiespink {
  color: #fff;
  background-color: #f55397;
}
</style>
