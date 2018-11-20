const multiplication = require('../multiplication');

describe ('calculate column width', () => {
  it ('should get maximum possible width for the column plus 2 spaces', () => {
    // Given
    const column = 4;
    const end = 6;

    // When
    const width = multiplication.calculateColumnWidth(column, end);

    // Then
    expect(width).toBe(8); // 4*6=24__
  });

  // Wow, there is only one test. Why? What if the column is greater than end?
  // Actually we won't worry about that. It is because the calculateColumnWidth
  // method is called internally. Its inputs are carefully passed by us rather
  // than by user.
});

describe ('create expression string', () => {
  it ('should create string of multiply expression for given width', () => {
    // Given
    const column = 3;
    const row = 4;
    const width = 9;

    // When
    const expression = multiplication.createExpressionString(column, row, width);

    // Then
    expect(expression).toBe('3*4=12   ');
  });
});