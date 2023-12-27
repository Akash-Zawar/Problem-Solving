//Write a Pollyfil of Filter & Map functions

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callBack, arg) {
    if (this == null) {
      throw new TypeError("Array.prototype.filter called on null or undefined");
    }

    if (typeof callBack !== "function") {
      throw new TypeError(`${callBack} is not a function`);
    }

    let filteredArr = [];
    let len = this.length;

    for (let i = 0; i < len; i++) {
      if (callBack.call(thisArg, this[i], i, this)) {
        filteredArr.push(this[i]);
      }
    }

    return filteredArr;
  };
}

if (!Array.prototype.map) {
  Array.prototype.map = function (callBack, arg) {
    if (this == null) {
      throw new TypeError("Array.prototype.filter called on null or undefined");
    }

    if (typeof callBack !== "function") {
      throw new TypeError(`${callBack} is not a function`);
    }

    let mappedArr = [];
    let len = this.length;

    for (let i = 0; i < len; i++) {
      if (callBack.call(thisArg, this[i], i, this)) {
        mappedArr.push(callBack.call(thisArg, this[i], i, this));
      }
    }

    return mappedArr;
  };
}

let num = [1, 2, 3, 4, 5, 4, 3, 4, 32, 1, 1];

let filteringArr = num.filter((elem) => elem * 3 < 7);

let mappingArr = num.map((elem, index) => elem + index);

console.log({ mappingArr, filteringArr });
