const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach(item => {
    let tokens = item.split('.');
    // console.log(tokens);
    tokens.reverse();
    // console.log(tokens);
    let str = '';
    for (let i = 0; i < tokens.length; i++) {
      str += '.' + tokens[i];
      result[str] = result[str] === undefined ? 1 : result[str] + 1;
    }
  });

  return result;
}

module.exports = {
  getDNSStats
};


// let domains = [
//  'code.yandex.ru',
//  'music.yandex.ru',
//  'yandex.ru'
// ]

// console.log(getDNSStats(domains))