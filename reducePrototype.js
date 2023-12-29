Array.prototype.myReduce = function (callback, accumlator) {
  let currentValue = accumlator !== undefined ? accumlator : this[0];
  let startIndex = accumlator !== undefined ? 0 : 1;

  for (let i = 0; i < this.length; i++) {
    currentValue = callback(currentValue, this[i], i, this);
  }
  return currentValue;
};

const sampleArr = [1, 2, 3, 4, 5];

const result = sampleArr.myReduce((acc, curr) => acc * curr);

console.log(result);
