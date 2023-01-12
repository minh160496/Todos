import htmls from "../core.js";
import { connect } from "../store.js";

function Footer({ todos, filted }) {
  return `
            <div class="todo__foot row row-between">
                <div class="foot__total">
                    <span>You have ${
                      todos.filter(filted["active"]).length
                    } pending task</span>
                </div>

                <div class="foot__button">
                    <input type="button" value="Clear All"
                        onclick="dispatch('clearAll')"
                    />
                </div>
            </div>
    
    `;
}

export default connect()(Footer);
