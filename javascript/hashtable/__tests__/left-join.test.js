'use strict';

const Hashtable = require('..');
const join = require('../left-join');

let synonyms = new Hashtable(8);
synonyms.set('diligent', 'employed');
synonyms.set('outfit', 'garb');
synonyms.set('wrath', 'anger');

let antonyms = new Hashtable(8);
antonyms.set('diligent', 'idle');
antonyms.set('flow', 'jam');
antonyms.set('wrath', 'delight');

describe('join works properly', () => {
  test('joins two tables with left join by default', () => {
    let result = join(synonyms, antonyms);

    expect(result).toContainEqual(
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight']
    );
    expect(result).not.toContainEqual(['flow', null, 'jam']);
  });
  test('joins two tables with right join if specified', () => {
    let result = join(synonyms, antonyms, 'right');

    expect(result).toContainEqual(
      ['diligent', 'employed', 'idle'],
      ['flow', null, 'jam'],
      ['wrath', 'anger', 'delight']
    );
    expect(result).not.toContainEqual(['outfit', 'garb', null]);
  });
  test('Throws error when third argument is not an accepted join', () => {
    expect(()=>join(synonyms,antonyms,'top')).toThrow('Not an acceptable join');
  });
});
