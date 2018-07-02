'use strict';

const util = require('util');
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

  /**s
   * Delete a key from the map
   * @param key
   */
  delete(key) { // eslint-disable-line

  }

  /**
   * Replace a value for a key in a hashmap
   * @param key
   * @param newValue
   */
  update(key,newValue) { // eslint-disable-line

  }

  serialize() {
    return this.map.serialize();
  }

  deserialize(data) {
    return JSON.parse(JSON.stringify(data));
  }

}

let myhash = new Hashmap();
myhash.add('John','Boss');
myhash.add('Cathy','The Real Boss');
myhash.add('Zach','Kid 1');
myhash.add('Allie','Kid 2');
myhash.add('Rosie','Dog');
myhash.add('Cat','TA');
myhash.add('Justin','Student');
myhash.add('Jason','Student');
myhash.add('Ben','Student');
myhash.add('Timea','Student');
myhash.add('Jen','Student');
myhash.add('Khalil','Student');
myhash.add('Michael','Student');
myhash.add('Ovi','Student');

console.log(util.inspect(myhash,{showHidden:false,depth:null}));