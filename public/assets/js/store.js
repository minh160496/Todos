import reducer from "./reducer.js";

import { createStore } from "./core.js";

import logger from "./ultil/logger.js";

const { attach, connect, dispatch } = await createStore(logger(reducer));

window.dispatch = dispatch;

export { attach, connect };
