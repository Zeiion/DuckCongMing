<template>
  <n-popover trigger="click">
    <template #trigger>
      <n-icon class="scale" size="30">
        <ScaleFit20Regular />
      </n-icon>
    </template>
    <n-slider
      class="slider"
      :value="boxScale"
      :step="0.05"
      :min="0.8"
      :max="1.2"
      @update:value="handleBoxScaleChange"
      :tooltip="false"
    >
      <template #thumb>
        <n-icon-wrapper :size="24" :border-radius="12">
          <n-icon :size="18" :component="ScaleFill20Regular" />
        </n-icon-wrapper>
      </template>
    </n-slider>
    <n-slider
      class="slider"
      :value="rowGap"
      :step="0.1"
      :min="0.2"
      :max="4"
      @update:value="handleRowGapChange"
      :tooltip="false"
    >
      <template #thumb>
        <n-icon-wrapper :size="24" :border-radius="12">
          <n-icon :size="18" :component="ArrowAutofitHeight20Regular" />
        </n-icon-wrapper>
      </template>
    </n-slider>
    <n-slider
      class="slider"
      :value="colGap"
      :step="0.1"
      :min="0.2"
      :max="4"
      @update:value="handleColGapChange"
      :tooltip="false"
    >
      <template #thumb>
        <n-icon-wrapper :size="24" :border-radius="12">
          <n-icon :size="18" :component="ArrowAutofitWidth20Regular" />
        </n-icon-wrapper>
      </template>
    </n-slider>
  </n-popover>
</template>

<script setup>
import {
  ScaleFit20Regular,
  ArrowAutofitHeight20Regular,
  ArrowAutofitWidth20Regular,
  ScaleFill20Regular,
} from '@vicons/fluent';
import { useStore } from '~/store/info';
const store = useStore();
const boxScale = $computed(() => store.getBoxScale);
const rowGap = $computed(() => parseFloat(store.getRowGap));
const colGap = $computed(() => parseFloat(store.getColGap));
const handleBoxScaleChange = (value) => {
  store.setBoxScale(value);
};
const handleRowGapChange = (value) => {
  store.setRowGap(value);
};
const handleColGapChange = (value) => {
  store.setColGap(value);
};
</script>

<style scoped>
.scale {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.slider {
  width: 200px;
  margin: 15px auto;
}
</style>
