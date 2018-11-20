function calculateColumnWidth(column, end) {
  return `${column}*${end}=${column * end}`.length + 2;
}

module.exports = {
  calculateColumnWidth
}