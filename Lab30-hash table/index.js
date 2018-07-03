'use strict';


const util = require('util'); //eslint-disable-line
const Hashmap = require('./hashtable.js');

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

// console.log(util.inspect(myhash,{showHidden:false,depth:null}));
exports.myHash = myhash;