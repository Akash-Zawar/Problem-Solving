const freqencySort = (a) => {
  let p = {};
  let ans = "";
  for (let i = 0; i < a.length; i++) {
    if (p.hasOwnProperty(a[i])) {
      p[a[i]]++;
    } else {
      p[a[i]] = 1;
    }
  }
  //   console.log(p);
  let values = Object.values(p);
  values.sort((a, b) => b - a);
  //   console.log(values);

  for (let i = 0; i < values.length; i++) {
    for (let key in p) {
      if (values[i] === p[key]) {
        ans += key.repeat(p[key]);
        delete p[key];
      }
    }
  }

  return ans;
};

console.log(freqencySort("abcAbcAASDDSDbbsC"));
