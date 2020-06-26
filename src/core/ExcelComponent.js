import {DomListener} from '@core/DomListener'

// abstract class
export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter

    // Для подписки слушателей Emitt
    this.unsubscribers = []

    this.prepare()
  }

  // Настраеваем наш компонент до init
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Надстройка над компонентами (обертка)
  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Инициализируем наш компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListeners()
  }

  // Удаляем компонент
  // Чистим слушатули
  destroy() {
    this.removeDOMListeners()
    // Чистим слушатули
    this.unsubscribers.forEach(unsub => unsub())
  }
}
