import htmls from "../core.js";
import { connect } from "../store.js";

function Header({ todos }) {
  return htmls`
    <div class="todo__head">
        <div class="todo__head__title">
            <h1>TODO APP</h1>
        </div>

        <div class="todo__head__create">
            <div class="todo__head__create__input row">
            <input type="text" onkeyup="event.key==='Enter' && this.value.trim() !=='' && dispatch('add', this.value.trim())" />
            <input type="button" value="CREATE"
            onclick='this.parentElement.querySelector("input[type=text]").value.trim() !=="" && dispatch("add", this.parentElement.querySelector("input[type=text]").value.trim())' />
            </div>
        </div>
    </div>
    `;
}

export default connect()(Header);
