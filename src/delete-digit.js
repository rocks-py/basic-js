const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = n.toString();
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let subarr = s.split('');
    subarr.splice(i, 1);
    let substr = subarr.join('');
    arr.push(parseInt(substr));
  }
  // console.log(arr);
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};

// console.log(deleteDigit(152))
