const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(A) {
  if (typeof A === 'string' && Number(A) <= MODERN_ACTIVITY && Number(A) > 0) {
    let age = Math.ceil((Math.log(MODERN_ACTIVITY / A) * HALF_LIFE_PERIOD) / 0.693);
    return age;
  } else return false
}

module.exports = {
  dateSample
};
