<template>
  <div class="list">
    <ConfigBox v-for="id in list" :id="id" :key="id" />
  </div>
</template>

<script setup>
import { useStore } from '~/store/info';
const store = useStore();
const brightness = $computed(() => store.getBrightness / 100);
const rowGap = $computed(() => store.getRowGap);
const colGap = $computed(() => store.getColGap);
defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: v-bind(rowGap) v-bind(colGap);
  opacity: v-bind(brightness);
}
</style>
