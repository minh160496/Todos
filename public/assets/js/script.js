import { attach } from "./store.js";
import App from "./component/app.js";

const appDOM = document.querySelector(".app");

attach(App, appDOM);
