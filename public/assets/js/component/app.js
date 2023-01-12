import htmls from "../core.js";
import Header from "./header.js";
import Body from "./body.js";
import Footer from "./footer.js";

import { connect } from "../store.js";
function App({ todos }) {
  return htmls`
        <div class="todo">
            ${Header()}
            ${Body()}
            ${Footer()}
        </div>
    `;
}

export default connect()(App);
