<template>
  <n-icon class="zoom" size="30" @click="zoom">
    <ArrowMinimize20Filled v-if="isMax" />
    <ArrowMaximize20Filled v-else />
  </n-icon>
</template>

<script setup>
import { ArrowMaximize20Filled, ArrowMinimize20Filled } from '@vicons/fluent';
import { useScale } from '~/hook/scale';
const { isMax, zoom } = useScale();
</script>

<style scoped>
.zoom {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
