const printEven = (num) => {
  const print = (i) => {
    if (i % 2 === 0) {
      console.log(i + " even");
    }
    if (i < 10) {
      i++;
      print(i);
    }
  };
  print(num);
};

console.log(printEven(1));
