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

describe ('create table', () => {
  it ('should create table for only one expression', () => {
    // Given
    const start = 4;
    const end = 4;
    
    // When
    const table = multiplication.createTable(start, end);

    // Then
    const expected = "4*4=16  \n"
    expect(table).toBe(expected);
  });

  it ('should create table for 2 rows', () => {
    // Given
    const start = 4;
    const end = 5;
    
    // When
    const table = multiplication.createTable(start, end);

    // Then
    const expected = 
      "4*4=16  \n" +
      "4*5=20  5*5=25  \n"
    expect(table).toBe(expected);
  });

  it ('should create table for multiple rows', () => {
    // Given
    const start = 3;
    const end = 6;
    
    // When
    const table = multiplication.createTable(start, end);

    // Then
    const expected = 
      "3*3=9   \n" +
      "3*4=12  4*4=16  \n" +
      "3*5=15  4*5=20  5*5=25  \n" +
      "3*6=18  4*6=24  5*6=30  6*6=36  \n";
      
    expect(table).toBe(expected);
  });

  it ('should be aligned properly if the expression width changes', () => {
    // Given
    const start = 2;
    const end = 5;
    
    // When
    const table = multiplication.createTable(start, end);

    // Then
    const expected = 
      "2*2=4   \n" +
      "2*3=6   3*3=9   \n" +
      "2*4=8   3*4=12  4*4=16  \n" +
      "2*5=10  3*5=15  4*5=20  5*5=25  \n";
      
    expect(table).toBe(expected);
  });
});

describe ('validate range', () => {
  it ('should return true if start is smaller than or equal with end', () => {
    expect(multiplication.isValidRange(1, 5)).toBeTruthy();
    expect(multiplication.isValidRange(1000, 1000)).toBeTruthy();
  });

  it ('should return false if start is greater than end', () => {
    expect(multiplication.isValidRange(2, 1)).toBeFalsy();
    expect(multiplication.isValidRange(1000, 999)).toBeFalsy();
  });

  it ('should return false if start or end is out of range', () => {
    // Given end out of range
    expect(multiplication.isValidRange(2, 1001)).toBeFalsy();
    expect(multiplication.isValidRange(1000, 1001)).toBeFalsy();
    expect(multiplication.isValidRange(-2, -1)).toBeFalsy();

    // Given start out of range
    expect(multiplication.isValidRange(1001, 1002)).toBeFalsy();
    expect(multiplication.isValidRange(0, 200)).toBeFalsy();
    expect(multiplication.isValidRange(-1, 200)).toBeFalsy();
  });
});

describe ('create multiplication table', () => {
  it ('should get multiplication table', () => {
    // Given
    const start = 2;
    const end = 5;
    
    // When
    const table = multiplication.createMultiplicationTable(start, end);

    // Then
    const expected = 
      "2*2=4   \n" +
      "2*3=6   3*3=9   \n" +
      "2*4=8   3*4=12  4*4=16  \n" +
      "2*5=10  3*5=15  4*5=20  5*5=25  \n";
      
    expect(table).toBe(expected);
  });

  it ('should get null if start is greater than end', () => {
    // Given
    const start = 5;
    const end = 4;

    // When
    const table = multiplication.createMultiplicationTable(start, end);

    // Then
    expect(table).toBeNull();
  });

  it ('should get null if start or end is out of range', () => {
    // Given
    const start = 200;
    const end = 1001;

    // When
    const table = multiplication.createMultiplicationTable(start, end);

    // Then
    expect(table).toBeNull();
  })
});