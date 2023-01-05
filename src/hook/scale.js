import {
  appWindow,
  PhysicalSize,
  PhysicalPosition,
} from '@tauri-apps/api/window';
import { useStore } from '~/store/info';

export function useScale() {
  const store = useStore();
  const isMax = $computed({
    get: () => store.getMaxStatus,
    set: (val) => store.setMaxStatus(val),
  });
  const savedSize = $ref(store.getSavedSize);

  // scale window size
  const scale = async () => {
    if (!isMax) {
      // 全屏
      appWindow.setSize(new PhysicalSize(savedSize[0], savedSize[1]));
    } else {
      // 最小化
      const innerSize = await appWindow.innerSize();
      savedSize = [innerSize.width, innerSize.height];
      appWindow.setSize(new PhysicalSize(200, 50));
    }
    isMax = !isMax;
  };

  // restore window size and position
  const restoreWindow = () => {
    if (!isMax) {
      appWindow.setSize(new PhysicalSize(200, 50));
    } else {
      const savedSize = store.getSavedSize;
      if (savedSize) {
        appWindow.setSize(new PhysicalSize(savedSize[0], savedSize[1]));
      }
    }
    const savedPosition = store.getSavedPosition;
    if (savedPosition) {
      appWindow.setPosition(
        new PhysicalPosition(savedPosition[0], savedPosition[1]),
      );
    }
    // console.log('🚀', savedSize, savedPosition);
  };

  // save window size and position
  const saveWindow = async () => {
    if (isMax) {
      const outerPosition = await appWindow.outerPosition();
      const savedSize = await appWindow.innerSize();
      store.setSavedSize([savedSize.width, savedSize.height]);
      store.setSavedPosition([outerPosition.x, outerPosition.y]);
      // console.log('🚀', savedSize, outerPosition);
    }
  };

  return {
    scale,
    restoreWindow,
    saveWindow,
    isMax: $$(isMax),
  };
}
