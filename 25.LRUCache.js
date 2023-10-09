let myList = new Map();

const LRUCache = (k, val) => {
  let myListSize = val;
  let temp = 0;
  if (myList.size < myListSize) {
    if (myList.get(k) == undefined) {
      myList.set(k, 1);
    } else {
      temp = myList.get(k);
      myList.delete(k);
      myList.set(k, temp + 1);
    }
  } else {
    myList.delete(myList.keys().next().value);
    if (myList.get(k) == undefined) {
      myList.set(k, 1);
    } else {
      temp = myList.get(k);
      myList.delete(k);
      myList.set(k, temp + 1);
    }
  }
};

LRUCache(1, 3);
LRUCache(2, 3);
LRUCache(4, 3);
LRUCache(2, 3);
LRUCache(5, 3);
LRUCache(6, 3);
LRUCache(7, 3);
LRUCache(1, 3);
LRUCache(2, 3);
LRUCache(7, 3);

console.log(myList);
