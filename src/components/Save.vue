<template>
  <n-icon class="save" size="30" @click="save">
    <Save20Regular />
  </n-icon>
</template>

<script setup>
import { useStore } from '~/store/info';
import { appWindow } from '@tauri-apps/api/window';
import { Save20Regular } from '@vicons/fluent';
const store = useStore();
const isMax = $computed(() => store.getMaxStatus);
const save = async () => {
  if (isMax) {
    const outerPosition = await appWindow.outerPosition();
    const savedSize = await appWindow.innerSize();
    store.setSavedSize([savedSize.width, savedSize.height]);
    store.setSavedPosition([outerPosition.x, outerPosition.y]);
    // console.log('🚀', savedSize, outerPosition);
  }
};
</script>

<style scoped>
.save {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
