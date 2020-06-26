// rootReducer - всегда возвращает state
// initialState - начальный state если он был сохранен
export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'})
  let listeners = []

  return {
    // Подписка событий
    subscribe(fn) {
      listeners.push(fn)
      return {
        // отписка
        unsubscribe() {
          listeners = listeners.filter(l => l != fn)
        }
      }
    },
    // Отправка данных для изменения
    dispatch(action) {
      state = rootReducer(state, action)
      listeners.forEach(listener => listener(state))
    },
    // Получение состяния
    getState() {
      return state
    }
  }
}

// Переписать на class
// export class createStore() {
//   constructor() {
//     this.state = {}
//     this.listeners = []
//   }
//
//   subscribe() {}
//   dispatch() {}
//   getState() {}
// }
