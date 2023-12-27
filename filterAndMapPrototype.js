//Write a Pollyfil of Filter & Map functions

Array.prototype.myMap = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

Array.prototype.myFilter = function (callBack) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2];

const map = arr.myMap((elem) => elem + 5);

const filter = arr.myFilter((elem) => elem < 6);

console.log({ map, filter });
