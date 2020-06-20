import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/teble.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return createTable()
  }
}
