//To find longest word from a string using functions

/**
 * Create a function which accepts string as input
 * Use split(" ") the string into array
 * Now run a for loop which compares length of all elements and stores the longest length and note the index this longest word in another variable
 * now return the element at index which has longest length
 *
 */

function longestString(str) {
  let arr = str.split(" ");
  let index = 0;
  let len = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (len < arr[i].length) {
      len = arr[i].length;
      index = i;
    }
  }
  return arr[index];
}

console.log(longestString("My name is ankit jain & i'm from morena morema"));
