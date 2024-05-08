import { getFlagImage } from './getFlagImage';

describe('getFlagImage', () => {
  test('returns the correct URL for a given country code', () => {
    const countryCode = 'US';
    const expectedURL = 'https://flagcdn.com/36x27/us.png';

    expect(getFlagImage(countryCode)).toBe(expectedURL);
  });
});