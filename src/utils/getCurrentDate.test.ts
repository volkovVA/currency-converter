import { getCurrentDate } from './getCurrentDate';

describe('getCurrentDate', () => {
  test('returns a string in "YYYY-MM-DD" format', () => {
    const currentDate = getCurrentDate();
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    expect(dateRegex.test(currentDate)).toBe(true);
  });

  test('returns the current date', () => {
    const currentDate = getCurrentDate();
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const year = today.getUTCFullYear();
    const month = String(today.getUTCMonth() + 1).padStart(2, '0');
    const day = String(today.getUTCDate()).padStart(2, '0');
    const expectedDate = `${year}-${month}-${day}`;

    expect(currentDate).toBe(expectedDate);
  });
});