function calculateColumnWidth(column, end) {
  return `${column}*${end}=${column * end}`.length + 2;
}

function createExpressionString(column, row, width) {
  return `${column}*${row}=${column * row}`.padEnd(width);
}

module.exports = {
  calculateColumnWidth,
  createExpressionString
}