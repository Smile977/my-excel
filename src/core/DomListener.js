export class DomListener {
  // $root - корневой элемент на который будем вешать различные слушатели
  constructor($root) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
  }
}
