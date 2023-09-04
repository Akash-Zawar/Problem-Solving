const reverseStr = (str) => {
  let p = "";
  let len = str.length;
  const addToP = (s) => {
    if (s >= 0) {
      p += str[s];
      s--;
      addToP(s);
    }
  };
  addToP(str.length - 1);
  return p;
};

console.log(reverseStr("aradhan"));
