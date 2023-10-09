let myList = new Map();

const LRUCache = (k) => {
  let temp = 0;

  if (myList.get(k) == undefined) {
    myList.set(k, 1);
  } else {
    temp = myList.get(k);
    myList.delete(k);
    myList.set(k, temp + 1);
  }
};

LRUCache(1);
LRUCache(2);
LRUCache(4);
LRUCache(2);
LRUCache(5);
LRUCache(6);
LRUCache(7);
LRUCache(1);
LRUCache(2);
LRUCache(7);

console.log(myList);
