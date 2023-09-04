/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let ans = [];
  for (let i = 0; i < matrix.length; i++) {
    let p = [];
    for (let j = 0; j < matrix[i].length; j++) {
      p.push(matrix[matrix.length - j - 1][i]);
    }
    ans.push(p);
    // console.log(ans);
  }
  matrix.splice(0, [matrix.length]);
  // console.log(matrix);
  for (let i = 0; i < ans.length; i++) {
    matrix.push(ans[i]);
  }
};
