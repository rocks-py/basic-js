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
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity)) return false;
  let activity = parseFloat(sampleActivity)
  if (activity <= 0 || activity > MODERN_ACTIVITY || isNaN(activity)) return false;

  let age = HALF_LIFE_PERIOD / 0.693 * Math.log(MODERN_ACTIVITY / activity);

  return Math.ceil(age);
}

module.exports = {
  dateSample
};

// 12926
console.log(dateSample('1'))


console.log(dateSample('9000'))
console.log(dateSample('15.1'))
console.log(dateSample('0'))
console.log(dateSample('-5'))
console.log(dateSample('-55.8'))