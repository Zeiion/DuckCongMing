<template>
  <div class="box" ref="box">
    <div class="mask" ref="mask"></div>
    <div class="vertical-list">
      <n-input
        v-model:value="info.remark"
        placeholder="备注"
        type="textarea"
        size="small"
      ></n-input>
      <div>
        <n-checkbox v-model:check="info.status[0]" size="small">
          好鹅
        </n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[0]"
          :options="characters"
          multiple
          clearable
          placeholder="选择好鸭身份"
          size="small"
        ></n-select>
      </div>
      <div>
        <n-checkbox v-model:check="info.status[1]" size="small">
          坏鸭
        </n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[1]"
          :options="characters"
          multiple
          clearable
          placeholder="选择坏鹅身份"
          size="small"
        ></n-select>
      </div>
      <div>
        <n-checkbox v-model:check="info.status[2]" size="small">
          中立
        </n-checkbox>
        <n-select
          label-field="name"
          value-field="id"
          v-model:value="info.predict[2]"
          :options="characters"
          multiple
          clearable
          placeholder="选择中立身份"
          size="small"
        ></n-select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window';
import { characters, infoTemplate } from '~/config/characters';
import { useStore } from '~/store/info';
const store = useStore();
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
const info = $computed({
  get: () => store.getInfoById(props.id) || infoTemplate,
  set: (val) => {
    store.setInfoById(props.id, val);
  },
});

const mask = $ref(null);
const box = $ref(null);
onMounted(async () => {
  const { height } = await appWindow.innerSize();
  // 双击穿透 0.5s 用于投票
  mask.onmousedown = () => {
    appWindow.setIgnoreCursorEvents(true).then(() => {
      console.log('setIgnoreCursorEvents', true);
      setTimeout(() => {
        appWindow.setIgnoreCursorEvents(false).then(() => {
          console.log('setIgnoreCursorEvents', false);
        });
      }, 500);
    });
  };
  // 根据box的高度设置scale
  const scale = box.clientHeight / (0.2 * height);
  box.style.transform = `scale(${scale})`;
});
</script>

<style scoped>
.box {
  display: flex;
  justify-content: flex-end;
  width: 24vw;
  height: 20vh;
  padding: 1%;
  box-sizing: border-box;
}
.mask {
  flex: 1;
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
:deep(.n-checkbox) > span {
  white-space: nowrap;
  display: inline-block;
  width: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
:deep(.n-input) .n-input-wrapper {
  max-height: 6vh;
}
</style>
