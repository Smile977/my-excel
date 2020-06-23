const CODES = {
  A: 65,
  Z: 90
}

// создание ячейки
function toCell(_, col) {
  return `
    <div 
      data-col="${col}"
      class="cell" 
      contenteditable
    ></div>`
}

// создание колонки
function toColumn(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}      
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

// создание структуры строки
function createRow(index, content) {
  const resize = index !== null
    ? '<div class="row-resize" data-resize="row"></div>'
    : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}        
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
