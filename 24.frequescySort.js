/**
 *
 * find occurence of each character in string
 * then add in it a string based on there occurence in sorted order
 *
 */

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
  for (let key in p) {
    ans += key.repeat(p[key]);
  }
  return ans;
};

console.log(freqencySort("aaaaaabbbBBBAAcC"));
