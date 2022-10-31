const Hashtable = require('..');

describe('hashtable class works as expected', () => {
  let testTable = new Hashtable(4);
  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    testTable.set('key', 'value');
    expect(testTable.buckets[3][0]).toEqual(['key', 'value']);
  });
  test('Retrieving based on a key returns the value stored', () => {
    expect(testTable.get('key')).toEqual('value');
  });
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(testTable.get('404')).toBeNull();
    expect(testTable.get('key4')).toBeNull();
  });
  test('Successfully handle a collision within the hashtable', () => {
    testTable.set('key1', 'value1');
    testTable.set('key2', 'value2');
    testTable.set('key4', 'value4');

    expect(testTable.buckets[3][1]).toEqual(['key4', 'value4']);
  });
  test('Replaces value for identical key', () => {
    testTable.set('key', 'newValue');

    expect(testTable.buckets[3][0]).toEqual(['key', 'newValue']);
  });
  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(testTable.get('key4')).toEqual('value4');
  });
  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let keyList = testTable.keys();
    expect(keyList).toContain('key');
    expect(keyList).toContain('key1');
    expect(keyList).toContain('key2');
    expect(keyList).toContain('key4');
  });
  test('Can check if a key is present in the table', () => {
    expect(testTable.has('key')).toBeTruthy();
    expect(testTable.has('404')).toBeFalsy();
    expect(testTable.has('not found')).toBeFalsy();
  });
  test('Successfully hash a key to an in-range value', () => {
    let hashCheck = testTable.hash('A lengthy string that adds to a large number');

    expect(hashCheck).toBeGreaterThanOrEqual(0);
    expect(hashCheck).toBeLessThanOrEqual(3);
  });
});
