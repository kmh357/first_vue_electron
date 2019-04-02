const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let url;
if (process.env.NODE_ENV === "DEV") {
  url = "http://localhost:8081";
} else {
  url = "file://${process.cwd()}/dist/index.html";
}

app.on("ready", () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600
  });
  window.loadURL(url);
});
