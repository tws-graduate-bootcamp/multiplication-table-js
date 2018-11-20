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
