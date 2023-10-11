/**
 * @param {number} x
 * @return {number}
 *
 1. initialise an empty array;
 2. now save the absoulte value of x in a varaible named quo
 3. initialse a reminder variable
 4. run a loop inside which you save update quo by taking floor value of quo/10 and save reminder of quo in rem variable and push it into a no.
 5. when quo becomes 0 then exit the loop
 6. now initialize a rev varaible to 0
 7. run a loop on no array
 8. and add each element of no to rev using the equation  rev += no[i]*10**(no.length-1-i); where you are multipling it by power of 10 starting with last index no of number

 9. check whether rev is between the given range of 32 bit integer
 10. if yes then return rev along with sign of x
 11. else return 0;

 */
var reverse = function (x) {
  let no = [];
  let quo = Math.abs(x);
  let rem = 0;
  while (quo > 0) {
    rem = quo % 10;
    quo = Math.floor(quo / 10);
    no.push(rem);
    // if(quo===0){
    //     break;
    // }
  }
  let rev = 0;
  for (let i = 0; i < no.length; i++) {
    rev += no[i] * 10 ** (no.length - 1 - i);
  }

  if (rev >= (-2) ** 31 && rev <= 2 ** 31 - 1) {
    // console.log(rev);
    return Math.sign(x) * rev;
  }
  return 0;
};
