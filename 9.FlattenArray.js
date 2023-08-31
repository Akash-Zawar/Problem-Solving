let k = [];

const flattenArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      k.push(arr[i]);
    } else {
      flattenArray(arr[i]);
    }
  }
};
flattenArray([1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5]);
console.log(k);
