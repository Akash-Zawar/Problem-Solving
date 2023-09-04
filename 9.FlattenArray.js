/**
 * maintain a global variable
 * create function which takes array as input
 * run a loop on all array element
 * now check whether element is number or array
 * if number push
 * if array then again call the function
 */

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

/////////////////////////////////////////

const flatArrayV1 = (arr) => {
  // const result = arr.flat(); // Not working for nested
  const result = arr.flat(Infinity);
  return result;
};

const flatArrayV2 = (arr) => {
  const cpArr = [...arr];
  const result = [];

  const flatArray = (inputArr) => {
    for (let i = 0; i < inputArr.length; i++) {
      const currentElem = inputArr[i];
      if (!Array.isArray(currentElem)) {
        result.push(currentElem);
        continue;
      }

      flatArray(currentElem);
    }
  };

  flatArray(cpArr);

  return result;
};

console.log(flatArrayV2([1, 2, [1, 2], [1, 2, [1, 2]], 3]));
