export class DomListener {
  // $root - корневой элемент на который будем вешать различные слушатели
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  // add listeners
  initDOMListeners() {
    console.log(this.listeners)
  }

  // remove listeners
  removeDOMListeners() {}
}
