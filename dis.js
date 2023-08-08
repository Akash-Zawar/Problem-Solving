var plusOne = function (digits) {
  digits = digits.join("");
  console.log(digits);
  digits = digits * 1 + 1;
  console.log(digits);
  digits = digits + "";
  digits = digits.split("");
  console.log(digits);
  return digits;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
