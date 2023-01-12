export default function htmls([first, ...strings], ...values) {
  return values
    .reduce((acc, curr) => acc.concat(curr, strings.shift()), [first])
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}

export async function createStore(reducer) {
  let state = await reducer();

  const roots = new Map();

  function render() {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }

  return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },

    connect() {
      return (component) =>
        (selector = (state) => state) =>
          component(selector(state));
    },

    async dispatch(action, ...args) {
      state = await reducer(state, action, ...args);
      render();
    },
  };
}
