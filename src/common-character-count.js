const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let str = s2;
  for (let i = 0; i < s1.length; i++) {
    if (str.indexOf(s1[i]) !== -1) {
      result += 1;
      str = str.slice(0, str.indexOf(s1[i])) + str.slice(str.indexOf(s1[i]) + 1)
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
