'use strict';

const HashMap = require('./hashmap.js');
const LeftJoin = require('./left_join.js');

let hashMap = new HashMap();
let leftJoin = new LeftJoin();

let synonyms = {
  'fond' : 'enamored',
  'wrath' : 'anger',
  'diligent' : 'employed',
  'outfit' : 'garb',
  'guide' : 'usher',
};
const synonymTable = {};

let antonyms = {
  'fond' : 'averse',
  'wrath' : 'delight',
  'diligent' : 'idle',
  'guide' : 'follow',
  'flow' : 'jam',
};
const antonymTable = {};

Object.keys(synonyms).forEach(function(key) {
  synonymTable[hashMap.hashCode(key)] = {[key] : synonyms[key]};
});

Object.keys(antonyms).forEach(function(key) {
  antonymTable[hashMap.hashCode(key)] = {[key] : antonyms[key]};
});

console.log(synonymTable);
console.log(synonymTable[3148863]['fond']);
console.log(antonymTable);

console.log(leftJoin.mergeLeft(synonymTable, antonymTable));

module.exports = {synonymTable, antonymTable};