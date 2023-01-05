<template>
  <div class="brightness">
    <n-slider
      :value="brightness"
      :step="1"
      :min="40"
      :max="95"
      @update:value="handleBrightnessChange"
      :tooltip="false"
    >
      <template #thumb>
        <n-icon-wrapper :size="24" :border-radius="12" color="#e88000">
          <n-icon :size="18" :component="BrightnessHigh20Filled" />
        </n-icon-wrapper>
      </template>
    </n-slider>
  </div>
</template>

<script setup>
import { BrightnessHigh20Filled } from '@vicons/fluent';
import { useStore } from '~/store/info';
const store = useStore();
const brightness = $computed(() => store.getBrightness);
const handleBrightnessChange = (value) => {
  store.setBrightness(value);
};
</script>

<style scoped>
.brightness {
  width: 200px;
}
:deep(.n-slider) .n-slider-rail__fill {
  background-color: #e88000;
  --n-fill-color-hover: #fd9210;
}
</style>
