import { filterIphones } from './';

describe('filterIphones', () => {
  it('Should do something', () => {
    const iPhones = [{
      "name": "iphone",
      "capacity": "64GB",
      "color": "Silver"
    }];
    const searchTerm = "iphone";

    expect(filterIphones(iPhones, searchTerm)).toEqual([
      {
        color: 'Silver',
        capacity : '64GB',
        name: 'iphone'
      }
    ]);
  });
});