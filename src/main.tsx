import ReactDOM from "react-dom/client";
import App from "./App";
import { createTray } from "./tray";

createTray();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
