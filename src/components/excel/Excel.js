import {$} from '@core/dom'

export class Excel {
  // $ - point at dom node
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)

      // DEBUG
      if (component.name) {
        window['c' + component.name] = component
      }

      $el.html(component.toHTML())
      $root.append($el)

      return component
    })
    return $root
  }

  // something add in html template
  render() {
    // paint html
    this.$el.append(this.getRoot())

    // call method after paint html and add listeners for components
    this.components.forEach(component => component.init())
  }
}
