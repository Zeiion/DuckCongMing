import {
  appWindow,
  PhysicalSize,
  PhysicalPosition,
} from '@tauri-apps/api/window';
import { register, isRegistered } from '@tauri-apps/api/globalShortcut';
import { useStore } from '~/store/info';

export function useScale() {
  const store = useStore();
  const isMax = $computed({
    get: () => store.getMaxStatus,
    set: (val) => store.setMaxStatus(val),
  });
  const savedSize = $ref(store.getSavedSize);

  // zoom window
  const zoom = async () => {
    if (!isMax) {
      // 全屏
      await appWindow.setSize(new PhysicalSize(savedSize[0], savedSize[1]));
    } else {
      // 最小化
      const innerSize = await appWindow.innerSize();
      savedSize = [innerSize.width, innerSize.height];
      await appWindow.setSize(new PhysicalSize(200, 50));
    }
    isMax = !isMax;
    appWindow.setFocus();
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

  const addZoomShortCutListener = async () => {
    const shortCutKey = store.getShortCutKey;
    const command = 'CommandOrControl+' + shortCutKey;
    const registered = await isRegistered(command);
    if (registered) {
      // ctrl + shortCutKey to zoom window
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === shortCutKey) {
          zoom();
        }
      });
    } else {
      await register(command, () => {
        zoom();
      });
    }
  };

  return {
    zoom,
    restoreWindow,
    saveWindow,
    isMax: $$(isMax),
    addZoomShortCutListener,
  };
}
