<script setup lang="ts">
import expandSectionBar from './expandSectionBar.vue';
import expandSectionBox from './expandSectionBox.vue';

</script>

<template>
  <div>
    <div>
      <expandSectionBar>
        <template v-slot="{ toggleHome(), 'Home', expandIcon }">
          <button @click="toggleHome()">{{  }}
            <span>{{iconName}}</span>
          </button>
        </template>
      </expandSectionBar>
    </div>
    <div>
      <expandSectionBox>
        <template>

        </template>
      </expandSectionBox>
    </div>
  </div>
</template>

<style>

</style>