export default function logger(reducer) {
  return async (prevState, action, ...args) => {
    console.group(action);
    console.log(prevState);
    const newState = await reducer(prevState, action, ...args);
    console.log(newState);
    console.groupEnd();
    return newState;
  };
}
