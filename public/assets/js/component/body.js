import htmls from "../core.js";

import { connect } from "../store.js";

function Body({ todos, filted, filting }) {
  return htmls`
            <div class="todo__body">
                <div class="todo__body__filter row">
                    <div class="filter__empty"></div>
                    <div class="filter--wrap row row-between">
                        <div class="filter__item">
                            <label for="all">All</label>
                            <input type="radio" id="all" name="filter" ${
                              filting === "all" && "checked"
                            }
                            onchange="this.checked && dispatch('filterList', this.id)"
                            >
                        </div>
                        <div class="filter__item">
                            <label for="completed">Completed</label>
                            <input type="radio" id="completed" name="filter"
                            ${filting === "completed" && "checked"}
                            onchange="this.checked && dispatch('filterList', this.id)"
                            />
                        </div>
                        <div class="filter__item">
                            <label for="active">Active</label>
                            <input type="radio" id="active" name="filter"
                            ${filting === "active" && "checked"}
                            onchange="this.checked && dispatch('filterList', this.id)"
                            >
                        </div>
                    </div>
                </div>

                <div class="todo__body__list">
                    ${htmls`
                        ${todos.filter(filted[filting]).map(
                          (todo) => `
                                <div class="list__item row row-between ${
                                  todo.isCompleted && "completed"
                                }">
                                    <div class="list__item__input">
                                        <input type="checkbox" id="check" ${
                                          todo.isCompleted === true && "checked"
                                        }
                                        onchange="dispatch('checker', ${
                                          todo.id
                                        })"/>
                                        <label for="check">${todo.name}</label>
                                    </div>

                                    <div class="list__item__icon"
                                    onclick="dispatch('clear', ${todo.id})"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </div>
                                </div>
                        `
                        )}

                    `}
                </div>
            </div>
    `;
}

export default connect()(Body);
