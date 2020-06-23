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
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()

      // получаем все id для ресайза ячеек
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = e => {
        console.log('onmousemove')
        if (event.target.dataset.resize === 'col') {
          const delta = e.pageX - coords.right
          const value = coords.width + delta
          $parent.$el.style.width = value + 'px'

          // изменяем размер всем ячейкам по id
          cells.forEach(el => el.style.width = value + 'px')
        }

        // if (event.target.dataset.resize === 'row') {
        //   console.log('row')
        //   const delta = e.pageY - coords.bottom
        //   const value = coords.height + delta
        //   $parent.$el.style.height = value + 'px'
        // }
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
