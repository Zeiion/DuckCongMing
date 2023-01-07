<template>
  <div class="box" ref="box">
    <div class="mask" ref="mask">
      <!-- {{ info }} -->
    </div>
    <div class="vertical-list">
      <n-input
        v-model:value="info.remark"
        placeholder="备注"
        type="textarea"
        size="small"
      ></n-input>
      <div>
        <n-checkbox
          :checked="info.status[0]"
          size="small"
          @update:checked="(...args) => handleCheckUpdate(0, ...args)"
          style="color: white"
        >
          <span style="color: white"> 好鹅 </span>
        </n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[0]"
          :options="characters.filter((item) => item.belong === 'goose')"
          multiple
          clearable
          filterable
          placeholder="选择好鹅身份"
          size="small"
        ></n-select>
      </div>
      <div>
        <n-checkbox
          :checked="info.status[1]"
          size="small"
          @update:checked="(...args) => handleCheckUpdate(1, ...args)"
        >
          <span style="color: red"> 坏鸭 </span>
        </n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[1]"
          :options="characters.filter((item) => item.belong === 'duck')"
          multiple
          clearable
          filterable
          placeholder="选择坏鸭身份"
          size="small"
        ></n-select>
      </div>
      <div>
        <n-checkbox
          :checked="info.status[2]"
          size="small"
          @update:checked="(...args) => handleCheckUpdate(2, ...args)"
        >
          <span style="color: orange"> 中立 </span>
        </n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[2]"
          :options="characters.filter((item) => item.belong === 'neutral')"
          multiple
          clearable
          filterable
          placeholder="选择中立身份"
          size="small"
        ></n-select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window';
import { characters, getInfoTemplate } from '~/config/characters';
import { useStore } from '~/store/info';
const store = useStore();
const isMax = $computed(() => store.getMaxStatus);
const boxScale = $computed(() => store.getBoxScale);
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
const info = $computed({
  get: () => store.getInfoById(props.id) || getInfoTemplate(),
  set: (val) => {
    store.setInfoById(props.id, val);
  },
});

const mask = $ref(null);
const box = $ref(null);
onMounted(() => {
  // 双击穿透 0.5s 用于投票
  mask.onmousedown = () => {
    appWindow.setIgnoreCursorEvents(true).then(() => {
      setTimeout(() => {
        appWindow.setIgnoreCursorEvents(false).then(() => {});
      }, 500);
    });
  };
  // appWindow.onResized(({ payload: size }) => {
  //   // 根据box的高度设置scale
  //   if (isMax) {
  //     const { height } = size;
  //     const scale = box.clientHeight / (0.2 * height);
  //     box.style.transform = `scale(${scale})`;
  //   }
  // });
});

const handleCheckUpdate = (index, checked) => {
  info.status[index] = checked;
  store.setInfoById(props.id, info);
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: flex-end;
  height: 20vh;
  box-sizing: border-box;
  transform: scale(v-bind(boxScale));
}
.mask {
  flex: 1;
  color: white;
}
.vertical-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5vh;
  width: 70%;
  height: 100%;
  overflow-y: auto;
}
.vertical-list > div {
  display: flex;
  align-items: center;
}
.n-checkbox {
  width: 40%;
}
:deep(.n-checkbox) span {
  white-space: nowrap;
  display: inline-block;
  width: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-weight: bold;
}
:deep(.n-input) .n-input-wrapper {
  max-height: 6vh;
}
</style>
