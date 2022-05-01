const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let acc = 0;
  for (let j = matrix.length - 1; j > 0; j--) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j - 1][i] !== 0) {
        acc += matrix[j][i];
      }
    }
  }

  for (i = 0; i < matrix[0].length; i++) {
    acc += matrix[0][i];
  }

  return acc;
}

module.exports = {
  getMatrixElementsSum
};

// let matrix = [
//  [0, 1, 1, 2],
//  [0, 5, 0, 0],
//  [2, 0, 3, 3]
// ]

// console.log(getMatrixElementsSum(matrix))