function calculateColumnWidth(column, end) {
  return `${column}*${end}=${column * end}`.length + 2;
}

function createExpressionString(column, row, width) {
  return `${column}*${row}=${column * row}`.padEnd(width);
}

function isValidRange(start, end) {
  return start >= 1 && start <= 1000 && end >= 1 && end <= 1000 && start <= end;
}

function createTable(start, end) {
  let table = "";

  for (let row = start; row <= end; ++row) {
    for (let column = start; column <= row; ++column) {
      const width = calculateColumnWidth(column, end);
      const expression = createExpressionString(column, row, width);
      table += expression;
    }
    table += '\n';
  }

  return table;
}

function createMultiplicationTable(start, end) {
  return createTable(start, end);
}

module.exports = {
  calculateColumnWidth,
  createExpressionString,
  createTable,
  isValidRange,
  createMultiplicationTable
}