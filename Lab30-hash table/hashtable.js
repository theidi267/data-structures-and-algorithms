'use strict';

const util = require('util'); //eslint-disable-line
const hash = require('string-hash');
const LL = require('../LL/LLconstructor/constructor.js');

class Hashmap {

  constructor() {
    this.length = 0;
    this.map = (() => {
      let ll = new LL();
      return ll;
    }) ();
  }

  add(key, value) {

    this.map.append({key:hash(key), value:{name:key, position: value}});
    this.length++;
    return this;
  }

  get(key) {

    let currentNode = this.map.head;
    while(currentNode) {
      if (currentNode.value.key === hash(key)) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  delete(key) {
    if (key === undefined) throw 'missing the key';

    let currentNode = this.map.head;
    while (currentNode) {
      if (currentNode.value.key === hash(key)) {
        this.map.remove(currentNode.value);
        return 'deleted the node';
      }
      currentNode = currentNode.next;
    }
    return 'key:value not found';
  }

  update(key, newValue) {
    if (key === undefined) throw 'missing the key';
    if (newValue === undefined) throw 'missing the new value';

    let currentNode = this.map.head;
    while (currentNode) {
      if (currentNode.value.key === hash(key)) {
        currentNode.value = {key: hash(key), value: {name: key, position: newValue}};
        return 'updated value';
      }
      currentNode = currentNode.next;
    }
    return 'key:value not found';
  }

  serialize() {
    return this.map.serialize();
  }
  
  deserialize(data) {
    return JSON.parse(JSON.stringify(data));
  }
}

module.exports = Hashmap;