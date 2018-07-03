# Hash Table Implementation

[![Build Status](https://travis-ci.com/theidi267/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/theidi267/data-structures-and-algorithms)


## Overview

The hash function we choose should:

Implementation of a hash-map, for hashing data we used the ```string-hash Node module```. 


## Algorithm

```
class Hashmap {

  constructor() {
    this.length = 0;
    this.map = (() => {
      let ll = new LL();
      return ll;
    }) ();
  }
}
```

## Functions

A number of prototype functions were created for the Hashmap class, two examples:

```add(key,value)``` adds to the map

```get(key)``` search the map

```delete(key)``` deletes itnode from map

```update(key, newValue)``` updates the "position" value of a node

```serialize()``` and ```deserialize(data) ```


## Tests

Tests are conducted with ```Jest```, every function has 3 tests, including edge-cases.

## Collaboration

A collective effort of with Ovi 
