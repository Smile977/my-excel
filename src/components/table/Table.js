import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/teble.template'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      /* const $parent = $resizer.$el.parentNode // bad!
       получить элемент по условию (селектор) - $resizer.$el.closest('.column')
       const $parent = $resizer.$el.closest('.column') // batter but bad
      */

      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()

      document.onmousemove = e => {
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        $parent.$el.style.width = value + 'px'
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
