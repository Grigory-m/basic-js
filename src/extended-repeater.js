const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr = [];
  let addition = [];
  let string = '';
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  for (let i = 0; i < repeatTimes; i++) {
    arr[i] = String(str);    
  }
  if (String(options.addition) && typeof(options.addition) !== 'undefined') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      addition[i] = String(options.addition);      
    }
  } 
  const addSeparator = addition.join(additionSeparator);
  string = arr.join(addSeparator + separator) + addSeparator;
  return string;
};
  