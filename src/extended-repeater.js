const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator = options.separator ? options.separator : '+';
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  options.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  const additionArr = [];
  if ('addition' in options) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionArr.push(`${options.addition}`);
    } 
  }
  const addition = additionArr.join(options.additionSeparator);

  const stringArr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    stringArr.push(`${str}${addition}`);
  }
  const result = stringArr.join(options.separator);

  return result;
}

module.exports = {
  repeater
};
