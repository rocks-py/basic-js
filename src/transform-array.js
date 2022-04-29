const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let res = [...arr]

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    switch (elem) {
      case '--double-next':
        if (i + 1 < arr.length) res.splice(i + 1, 0, arr[i + 1]);
        break;
      case '--discard-next':
        if (i + 1 < arr.length) res.splice(i + 1, 1);
        break;
        // Нужно проверять что элемент i - 2 не является '--discard-next' и только в этом случае что-то делать
      case '--discard-prev':
        if (i === 1 || (i >= 2 && arr[i - 2] !== '--discard-next')) res.splice(i - 1, 1);
        break;
      case '--double-prev':
        if (i === 1 || (i >= 2 && arr[i - 2] !== '--discard-next')) res.splice(i - 1, 0, arr[i - 1]);
        break;
    }
  }

  const toRemove = ['--double-next', '--discard-next', '--discard-prev', '--double-prev']
  res = res.filter( function( el ) {
    return toRemove.indexOf( el ) < 0;
  });

  return res;
}

module.exports = {
  transform
};

// console.log(transform([1, 2, 3, '--double-next', 4, 5]));

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));