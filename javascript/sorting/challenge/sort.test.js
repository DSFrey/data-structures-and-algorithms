let Movies = require('./movies');
let { inGenre, sortTitle, sortYear, yearComparator, titleComparator }  = require('./sort');

describe('Sorters', () => {
  it('can compare two movies by year', () => {
    expect(yearComparator(Movies[1],Movies[2])).toBeLessThan(0);
    expect(yearComparator(Movies[0],Movies[0])).toEqual(0);
    expect(yearComparator(Movies[0],Movies[1])).toBeGreaterThan(0);
  });
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Cotton Club',
      'Crocodile Dundee',
      'Beetlejuice',
      'The Shawshank Redemption',
      'Memento',
      'City of God',
      'Ratatouille',
      'Stardust',
      'Valkyrie',
      'The Intouchables',
    ]);
  });

  it('can compare two movies by title', () => {
    expect(titleComparator(Movies[0],Movies[1])).toBeLessThan(0);
    expect(titleComparator(Movies[4],Movies[5])).toBeGreaterThan(0);
  });
  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });

  it('can find movies by genre', () => {
    const movies = sortYear(inGenre(Movies, 'Adventure'));
    expect(movies.map((m) => m.title)).toEqual([
      'Crocodile Dundee',
      'Stardust',
    ]);
  });
});
