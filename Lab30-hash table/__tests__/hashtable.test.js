'use strict';

let Index = require('../index.js');
const util = require('util'); //eslint-disable-line

describe('Hashtable tests', () => {

  it('Adds a new node to the map and increments count', () => {
    Index.myHash.add('Slim Shady', 'Cat');
    expect(Index.myHash.map.length).toBe(15);
    expect(Index.myHash.get('Slim Shady').value.position).toBe('Cat');
  });

  it('Adds a new node to the map and increments count', () => {
    Index.myHash.add('Pepper', 'Cat');
    expect(Index.myHash.map.length).toBe(16);
  });

  it('Delete the head', () => {
    Index.myHash.delete('John');
    expect(Index.myHash.map.length).toBe(15);
  });

  it('Trying to delete a value that doesn\'t match any in the list', () => {
    Index.myHash.delete('Call me Bubbles');
    expect(Index.myHash.map.length).toBe(15);
  });

  it('Delete a random node', () => {
    Index.myHash.delete('Slim Shady');
    expect(Index.myHash.map.length).toBe(14);
  });

  it('The get function finds any node in the list', () => {
    expect(Index.myHash.get('Pepper').value.position).toBe('Cat');
    expect(Index.myHash.get('Timea').value.name).toBe('Timea');
  });

  it('The get function returns undefined if the search value is not in the list', () => {
    expect(Index.myHash.get('Donkey')).toBe(undefined);
  });

  it('Updates the specified parameter of an item in the list', () => {
    Index.myHash.update('Pepper', 'Princess');
    expect(Index.myHash.get('Pepper').value.position).toBe('Princess');
  });

  it('Trying to update an item not in the list, throw error', () => {
    expect(Index.myHash.update('Slim Shady', 'Princess')).toBe('key:value not found');
  });

  it('Trying to update an item with undefined value, throw error', () => {
    expect(() => Index.myHash.update('Pepper', undefined)).toThrow();
  });
});