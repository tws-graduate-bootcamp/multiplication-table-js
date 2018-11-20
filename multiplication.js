function calculateColumnWidth(column, end) {
  return `${column}*${end}=${column * end}`.length + 2;
}

function createExpressionString(column, row, width) {
  return `${column}*${row}=${column * row}`.padEnd(width);
}

function createTable(start, end) {
  return createExpressionString(start, end, calculateColumnWidth(start, end)) + '\n';
}

module.exports = {
  calculateColumnWidth,
  createExpressionString,
  createTable
}