const CODES = {
  A: 65,
  Z: 90
}

// создание ячейки
function toCell() {
  return `<div class="cell" contenteditable></div>`
}

// создание колонки
function toColumn(col) {
  return `
    <div class="column">
      ${col}
      <div class="col-resize"></div>
    </div>
  `
}

// создание структуры строки
function createRow(index, content) {
  const resizer = index !== null ? '<div class="row-resize"></div>' : ''
  return `
    <div class="row">
      <div class="row-info">
        ${index ? index : ''}
        ${resizer}        
      </div>
      <div class="row-data">${content}</div>
    </div> 
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  // const cols = new Array(colsCount)
  //     .fill('')
  //     .map((el, index) => {
  //       return toChar(el, index)
  //     })
  //     .map(el => {
  //       return createCol(el)
  //     })
  //     .join('')

  // определение колонок, создание нового массива от количества колонок
  const cols = new Array(colsCount)
      .fill('') // заполнение ячеек пустыми строками
      .map(toChar) // преобразоваваем к символам от A до Z
      .map(toColumn) // создаем колонки
      .join('') // соединяем в строчку

  // шапка excel A-Z (работа с первой строчкой)
  rows.push(createRow(null, cols))

  // работа с основной таблицей и ячейками
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(rowsCount)
        .fill('')
        .map(toCell)
        .join('')

    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}
