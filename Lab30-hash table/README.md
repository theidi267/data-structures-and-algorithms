# Hash Table Implementation


## Overview

The hash function we choose should:

Take a string as its input and return a number between 0 and m, our desired bucket array length.
Return an even distribution of bucket indexes for an average set of inputs. If our hash function is unevenly distributed, it will put more items in some buckets than others. 


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



## Collaboration

A collective effort of with Ovi 
