import "./TitleBar.css";

import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindown = getCurrentWindow();

export function TitleBar() {
  return (
    <div data-tauri-drag-region className="titlebar">
      <div
        className="titlebar-button"
        id="titlebar-minimize"
        onClick={() => appWindown.minimize()}
      >
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div
        className="titlebar-button"
        id="titlebar-maximize"
        onClick={() => appWindown.toggleMaximize()}
      >
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div
        className="titlebar-button"
        id="titlebar-close"
        onClick={() => appWindown.hide()}
      >
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  );
}
