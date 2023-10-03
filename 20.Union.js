// Unique values only from 2 arrays i.e. union values
// first push each element into 1 array
// then filter and remove all duplicates

const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

const union = (A, B) => {
  let u = [];
  u.push(...inputA, ...inputB);
  let p = u.filter((v, index, self) => {
    return self.indexOf(v) === index;
  });
  return p;
};

console.log(union(inputA, inputB));
