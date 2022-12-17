<script setup lang="ts">
  import { ref } from 'vue';
  import { useAccessOptionsStore } from "@/stores/accessOptionsStore"
  import { storeToRefs } from 'pinia';
  const store = useAccessOptionsStore();
  const { accessOptionsList } = storeToRefs(store)
  const { toggleAccessibilityOption, fetchOptions } = store;
  const showAccess = ref(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function toggleAccessibilityBox () {
    showAccess.value = !showAccess.value
  }
  fetchOptions();
  console.log(accessOptionsList);
</script>
<template>
    <button @click="toggleAccessibilityOption(0)">Click for Accessibility Options </button>
    <div v-if="showAccess" id="accessibility" class="colorAlpha">
      <div v-for="accessOption in accessOptionsList" :key="accessOption.optionName" class="list">
          <div class="item">
            <span :class="{ completed: accessOption.isEnabled }"
              >{{ accessOption.optionName }} is enabled: {{ accessOption.isEnabled }}</span
            >
            <div>
              <button @click.stop="toggleAccessibilityOption(1)">Toggle {{ accessOption.optionName }}</button>
            </div>
            <br />
          </div>
        </div>
      </div>
</template>
<style>
#accessibility {
  display: flex;
  justify-content: flex-start;
}
</style>
