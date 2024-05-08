import { formatDate } from './formatDate';

describe('formatDate', () => {
  test('returns the formatted date for a valid UTC date string', () => {
    const utcDateString = 'Wed, 05 May 2021 12:00:00 GMT';
    const expectedFormattedDate = 'Wed, 05 May 2021';

    expect(formatDate(utcDateString)).toBe(expectedFormattedDate);
  });

  test('returns "Invalid date" for an invalid UTC date string', () => {
    const invalidUtcDateString = 'Invalid UTC date string';

    expect(formatDate(invalidUtcDateString)).toBe('Invalid date');
  });
});