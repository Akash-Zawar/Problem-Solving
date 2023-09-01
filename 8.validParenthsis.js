/**
 * @param {string}
 * @return {boolean}
 *
 * Create an empty array called record to store opening brackets.
 * Create a brackets object to map closing brackets to their openings.
 * run a loop through input string.
 * If it's an opening bracket, push it onto the record.
 * If it's a closing bracket
 *       Pop the last opening bracket off the stack
 *       Check if the closing bracket matches the popped opening bracket using the brackets object.
 *       If they don't match, return false.
 * After looping through the string, if the record is empty, all brackets were closed correctly.
 * If the record is not empty, there were unmatched opening brackets. Return false.
 *  Otherwise, if we got through the whole string with all brackets matched, return true.
 *
 */
var isValid = function (s) {
  const record = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  if (s[0] === "(" || s[0] === "{" || s[0] === "[") {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (
      currentBracket === "(" ||
      currentBracket === "{" ||
      currentBracket === "["
    ) {
      record.push(currentBracket);
      console.log(record);
    } else {
      const lastBracket = record.pop();
      console.log(lastBracket);

      if (brackets[currentBracket] !== lastBracket) {
        return false;
      }
    }
  }

  return record.length === 0;
};

console.log(isValid("{}[]()"));
