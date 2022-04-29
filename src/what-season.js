const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) return 'Unable to determine the time of year!';

  try {
    if (!(date instanceof Date) || isNaN(date)) throw new Error('Invalid date!');
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  let season;
  if ([11, 0, 1].includes(month)) {
    season = 'winter';
  }
  else if ([2, 3, 4].includes(month)) {
    season = 'spring';
  }
  else if ([5, 6, 7].includes(month)) {
    season = 'summer';
  }
  else if ([8, 9, 10].includes(month)) {
    season = 'autumn';
  }
  return season;
}

module.exports = {
  getSeason
};

// const date = new Date(2022, 11, 1)
// console.log(getSeason(date))




