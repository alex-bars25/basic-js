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
  if (!options.repeatTimes)
    options.repeatTimes = 1;
  
  if (!options.additionRepeatTimes)
    options.additionRepeatTimes = 1;

  if (!options.additionSeparator)
    options.additionSeparator = '|';

  let addition = [];
  if (options.addition === undefined)
    options.addition = '';
  else {
    for (i = 0; i < options.additionRepeatTimes; i++) {
      addition.push('' + options.addition);
    }
    addition = addition.join(options.additionSeparator);
  }

  if (!options.separator)
    options.separator = '+';

  let string = [];
  for (i = 0; i < options.repeatTimes; i++) {
    string.push(str + addition);
  }
  return string.join(options.separator);
}

console.log(repeater('STRING', { separator: '**', addition: 'PLUS', additionSeparator: '00' }));

module.exports = {
  repeater
};
