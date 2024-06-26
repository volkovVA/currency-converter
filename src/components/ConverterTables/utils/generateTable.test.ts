import { createData, generateRows, getBaseNumber, getTargetNumber } from './generateTable';

describe('Generate table functions', () => {
  describe('createData', () => {
    test('returns an object with the provided amount and calculation', () => {
      const amount = 10;
      const calculation = 20;
      const data = createData(amount, calculation);

      expect(data).toEqual({ amount, calculation });
    });
  });

  describe('generateRows', () => {
    test('returns an array of data rows generated by the provided function', () => {
      const mockGetNumberFunction = jest.fn((amount) => amount * 2);

      const expectedRows = [
        { amount: 1, calculation: 2 },
        { amount: 5, calculation: 10 },
        { amount: 10, calculation: 20 },
        { amount: 25, calculation: 50 },
        { amount: 50, calculation: 100 },
        { amount: 100, calculation: 200 },
        { amount: 500, calculation: 1000 },
        { amount: 1000, calculation: 2000 },
        { amount: 5000, calculation: 10000 },
        { amount: 10000, calculation: 20000 },
        { amount: 50000, calculation: 100000 }
      ];

      const rows = generateRows(mockGetNumberFunction);

      expect(rows).toEqual(expectedRows);
    });
  });

  describe('getBaseNumber', () => {
    test('returns the base number calculated using the provided conversion rate', () => {
      expect(getBaseNumber(10, 0.5)).toBe(5);
      expect(getBaseNumber(20, 0.25)).toBe(5);
    });
  });

  describe('getTargetNumber', () => {
    test('returns the target number calculated using the provided conversion rate', () => {
      expect(getTargetNumber(10, 0.5)).toBe(20);
      expect(getTargetNumber(20, 0.25)).toBe(80);
    });
  });
});