export class Excel {
  // $ - point at dom node
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div') // создание главного элемента
    $root.classList.add('excel') // добавляем класс для корневого элемента
    // проходимся по всем классам в массиве и создаем их экземпляры
    this.components.forEach(Component => {
      const $el = document.createElement('div')
      $el.classList.add(Component.className)
      const component = new Component($el)
      $el.innerHTML = component.toHTML() // наполнение корневого элемента
      $root.append($el)
    })
    return $root
  }

  // складываем что то в шаблон
  render() {
    this.$el.append(this.getRoot())
  }
}
