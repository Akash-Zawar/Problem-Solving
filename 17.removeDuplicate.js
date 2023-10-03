//Remove duplicate elements from the Array - [1,2,3,4,1,2,3,4,5,8,9,6,4,4,2,1]

const removeDuplicate = (arr) => {
  let rmDup = arr.filter((elem, index, array) => array.indexOf(elem) === index);

  return rmDup;
};

console.log(removeDuplicate([1, 2, 3, 4, 1, 2, 3, 4, 5, 8, 9, 6, 4, 4, 2, 1]));
