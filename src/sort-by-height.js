const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [...arr];
  res = res.sort((a,b) => a - b).filter(x => x !== -1);
  console.log(res);
  arr.forEach((item, idx) => {
    if (item === -1) {
      res.splice(idx, 0, item);
    }
  })
  return res;
}

module.exports = {
  sortByHeight
};


// console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
