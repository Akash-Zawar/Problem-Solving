/**
 *
 * @param
 * @returns
 *
 * run a loop from 1 to n and initialise a variable from 1 and multiply till n
 */

function factorial(n) {
  let mul = 1;
  for (let i = 1; i <= n; i++) {
    mul *= i;
  }
  return mul;
}

console.log(factorial(5)); //120
