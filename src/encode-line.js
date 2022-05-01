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
  let counter = 1;
  let res = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1] === str[i]) {
      counter += 1;
    } else {
      if (counter > 1) res += counter;
      res += str[i];
      counter = 1;
    }
  }

  if (str.length > 2) {
    let last = str[str.length - 1];
    let prev = str[str.length - 2];
    if (last === prev) {
      res += counter + last;
    } else {
      res += last;
    }
  }

  return res;
}

module.exports = {
  encodeLine
};

console.log(encodeLine('aabbbc'))