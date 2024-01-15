//Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * At first find a frequency object based on given array.
 * Now take array of values from frequency of objects.
 * Now initialise a new array which has duplicate values removed from array of values.
 * Now compare length of array of values and the new array if equal then return true else return false
 */

const uniqueOccurences = (arr) => {
  const frequency = {};
  for (let i = 0; i < arr.length; i++) {
    // if (frequency.hasOwnProperty(arr[i])) {
    //   frequency[arr[i]]++;
    // } else {
    //   frequency[arr[i]] = 1;
    // }
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }
  let values = Object.values(frequency);

  let uniqueValues = new Set(Object.values(frequency));

  //   const removedDuplicateValues = values.filter(
  //     (item, index) => index === values.indexOf(item)
  //   );

  //   console.log(removedDuplicateValues);
  return Object.values(frequency).length === uniqueValues.size;
};

console.log(uniqueOccurences([1, 1, 2, 2, 2, 3]));
