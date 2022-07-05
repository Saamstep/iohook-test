// import { uIOhook, UiohookKey } from "uiohook-napi";

// const { uIOhook, UiohookKey } = require("uiohook-napi");
import { uIOhook, UiohookKey } from "uiohook-napi";
// const { Client } = require("node-osc");

// const client = new Client("192.168.1.98", 12321);

// const fetch = require("node-fetch");
import fetch from "node-fetch";

let click = true;

uIOhook.on("keydown", async (e) => {
  if (click && e.keycode == UiohookKey.Numpad0) {
    // client.send("/press/bank/5/24", () => {
    //   client.close();
    // });
    let f = await fetch("http://192.168.1.98:8000/press/bank/5/24");

    let r = await f.text();
    if (r !== "ok") console.error(r);

    console.log("PRESSED " + Date.now());
    click = false;
  } else {
    return;
  }
});

uIOhook.on("keyup", (e) => {
  click = true;
});

console.log("Yay!");

uIOhook.start();
