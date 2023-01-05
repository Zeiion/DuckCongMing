<template>
  <n-icon class="scale" size="30" @click="scale">
    <ArrowMinimize20Filled v-if="isMax" />
    <ArrowMaximize20Filled v-else />
  </n-icon>
</template>

<script setup>
import { ArrowMaximize20Filled, ArrowMinimize20Filled } from '@vicons/fluent';
import { useScale } from '~/hook/scale';
const { isMax, scale } = useScale();
</script>

<style scoped>
.scale {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
