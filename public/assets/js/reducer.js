let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
};

const filted = {
  completed: (x) => x.isCompleted,
  active: (x) => !x.isCompleted,
  all: (x) => x,
};

const api = "http://localhost:3000/todos";

const todos = await fetch(api, {
  method: "GET",
  headers: headersList,
})
  .then((respon) => respon.json())
  .then((data) => data);

const data = {
  todos: todos,
  filted: filted,
  filting: "all",
};

async function postApi(dataPost) {
  const headers = {
    "Content-Type": "application/json",
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(dataPost),
  };

  return fetch(api, options)
    .then((respon) => respon.json())
    .then((data) => data);
}

// PATCH API
function patchApi(dataPatch, id) {
  const headers = {
    "Content-Type": "application/json",
  };
  const options = {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(dataPatch),
  };
  return fetch(api + "/" + id, options);
}

//PUT API
function deleteApi(id = "") {
  const headers = {
    "Content-Type": "application/json",
  };
  const options = {
    method: "DELETE",
    headers: headers,
  };
  return fetch(api + "/" + id, options);
}

const actions = {
  add: async (value, state) => {
    const dataPost = {
      name: value.trim(),
      isCompleted: false,
    };
    const newtodo = await postApi(dataPost);
    state.todos.push(newtodo);
  },

  filterList: (value, state) => {
    state.filting = value;
  },

  checker: (id, state) => {
    state.todos[id - 1].isCompleted = !state.todos[id - 1].isCompleted;
    const dataPatch = {
      isCompleted: state.todos[id - 1].isCompleted,
    };
    patchApi(dataPatch, id);
  },

  clear: async (id, state) => {
    await deleteApi(id);
    state.todos.splice(id - 1, 1);
  },

  clearAll: (state) => {
    for (let i = 0; i < state.todos.length; ) {
      i++;
      deleteApi(i);
    }
    state.todos = [];
  },
};

export default async function reducer(state = data, action, ...args) {
  if (actions[action]) {
    await actions[action](...args, state);
  }
  return state;
}
