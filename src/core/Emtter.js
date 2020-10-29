export class Emtter {
  constructor() {
    this.listeners = {};
  }

  // dispatch fire trigger
  // Уведомляем слушателей если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach(listener => listener(...args));
    return true;
  }

  // on listen
  // подписываемся на уведомления
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);

    return () => {
      this.listeners[event] = this.listeners[event].filter(
        listener => listener !== fn
      );
    };
  }
}

//EXAMPLE
// const emitter = new Emtter();
//
// const unsub = emitter.subscribe("gunya", data => console.log("gunya: ", data));
//
// emitter.emit("gunya", 42);
//
// setTimeout(() => {
//   emitter.emit("gunya", "2 sec");
// }, 2000);
//
// setTimeout(() => {
//   unsub();
// }, 2000);
//
// setTimeout(() => {
//   emitter.emit("gunya", "4 sec");
// }, 4000);
