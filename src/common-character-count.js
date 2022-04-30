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
  let a1 = s1.split('');
  let a2 = s2.split('');
  let counts1 = {}
  let counts2 = {}
  a1.forEach(item => counts1[item] = counts1[item] !== undefined ? counts1[item] + 1 : 1);
  a2.forEach(item => counts2[item] = counts2[item] !== undefined ? counts2[item] + 1 : 1);

  console.log(counts1);
  console.log(counts2);

  let acc = 0;
  Object.keys(counts1).forEach(item => {
    if (counts1[item] !== undefined && counts2[item] !== undefined) {
      let c1 = counts1[item];
      let c2 = counts2[item];
      let min = Math.min(c1, c2);
      acc += min;
    }
  })
  
  return acc;
}

module.exports = {
  getCommonCharacterCount
};

// console.log(getCommonCharacterCount('aabcc', 'adcaa'));