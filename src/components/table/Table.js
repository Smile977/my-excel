import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/teble.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
  }

  toHTML() {
    return createTable()
  }

  // onClick() {
  //   console.log('click')
  // }
  //
  // onMousedown(event) {
  //   console.log('mousedown', event.target)
  // }
  //
  // onMousemove() {
  //   console.log('mousemove')
  // }
  //
  // onMouseup() {
  //   console.log('mouseup')
  // }
}
