const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  let i = 0;
  let k = 1;

  while (i < str.length) {
    while (str[i] === str[i + k]) k += 1;

    result += k === 1 ? str[i] : `${k}${str[i]}`;

    i += k;
    k = 1;
  }

  return result;
}

module.exports = {
  encodeLine
};
