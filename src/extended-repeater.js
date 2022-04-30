const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let separator = options.separator !== undefined ? options.separator : '+';
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  if (typeof str !== 'string') str = new String(str);
  let addition = options.addition !== undefined ? new String(options.addition) : '';

  let add = (addition + additionSeparator).repeat(additionRepeatTimes);
  add = add.slice(0, add.length - additionSeparator.length);

  let val = (str + add + separator).repeat(repeatTimes);
  val = val.slice(0, val.length - separator.length);

  return val;
}

module.exports = {
  repeater
};

// TESTstrADD!
// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }));