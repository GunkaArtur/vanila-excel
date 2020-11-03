import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emitter = options.emitter;
    this.unsubscibers = [];

    this.prepare();
  }

  // Настраиваем наш компонент до Init
  prepare() {}

  //возвращает шаблон компонента
  toHTML() {
    return "";
  }

  // Уведомляем слушателей про события event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscibers.push(unsub);
  }

  // Инициализируем компонентб добовляем DOM слушатели
  init() {
    this.initDomListeners();
  }

  // Удаляем компонентб чистим слушатели
  destroy() {
    this.removeDomListeners();
    this.unsubscibers.forEach(unsub => unsub());
  }
}
