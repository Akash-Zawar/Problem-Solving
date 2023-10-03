//Write a program to check the Leap & Non Leap year

const checkYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};

console.log(checkYear(2000));
