<template>
  <div class="list">
    <ConfigBox v-for="id in list" :id="id" :key="id" />
  </div>
</template>

<script setup>
import { useStore } from '~/store/info';
const store = useStore();
const brightness = $computed(() => store.getBrightness / 100);
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
  gap: 2.6vh;
  opacity: v-bind(brightness);
}
</style>
