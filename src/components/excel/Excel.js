export class Excel {

  // $ - point at dom node
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }
}
