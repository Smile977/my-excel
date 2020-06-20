const CODES = {
  A: 65,
  Z: 90
}

// создание ячейки
// function createCell() {
//   return `<div class="cell contenteditable">B1</div>`
// }

// создание колонки
function toColumn(col) {
  return `<div class="column">${col}</div>`
}

// создание структуры строки
function createRow(content) {
  return `
    <div class="row">
      <div class="row-info"></div>
      <div class="row-data">${content}</div>
    </div> 
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCunt = 15) {
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

  // шапка excel A-Z
  rows.push(createRow(cols))

  for (let i = 0; i < rowsCunt; i++) {
    rows.push(createRow())
  }

  return rows.join('')
}
