export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей если они есть
  // event = string = 'formula:done'
  // table.emit('table:select', {a:1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // Подписываемся на уведомления
  // Добавляем нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)

    // Отписка
    return () => {
      this.listeners[event] =
        this.listeners[event]
            .filter(listener => listener !== fn)
    }
  }
}

// example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('vladilen', data => console.log('Sub', data))
//
// emitter.emit('1351351', 42)
//
// setTimeout(() => {
//   emitter.emit('vladilen', 'after 2 second')
// }, 2000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('vladilen', 'after 4 second')
// }, 4000)
