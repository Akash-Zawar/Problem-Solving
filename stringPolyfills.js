// Write a pollyfill of toLowerCase, toUpperCase, Trim
String.prototype.myToLowerCase = function () {
  return this.replace(/[A-Z]/g, (match) =>
    String.fromCharCode(match.charCodeAt(0) + 32)
  );
};

String.prototype.myToUpwerCase = function () {
  return this.replace(/[a-z]/g, (match) =>
    String.fromCharCode(match.charCodeAt(0) - 32)
  );
};

String.prototype.myTrim = function () {
  return this.replace(/^\s+|\s+$/g, "");
};

const str = "abcdfg";
const str2 = "ABCDF";
const str3 = "           asd         ";
console.log(str.myToLowerCase());
console.log(str2.myToUpwerCase());
console.log(str3.myTrim());
