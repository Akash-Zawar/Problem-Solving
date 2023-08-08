/**
 * create a function and take array as parameter
 * store length of array in a variable to run a loop for fixed times
 * then run a loop and check for all 1 and slice them and push them in end of array at same time reduce counter by 1
 * the returned value from splice is in array form so convert in into string
 *
 */

function arraySw(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 1) {
      arr.push(arr.splice(i, 1).join(""));
      i--;
    }
  }
  return arr;
}

console.log(arraySw([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0]));
