const observers = [];

export default Object.freeze({
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => observers.filter((observer) => observer !== func),
  notify: (data) => observers.forEach((observer) => observer(data)),
});
