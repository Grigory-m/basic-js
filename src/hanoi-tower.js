const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = (2**disksNumber - 1);
  const turnsInSecond = turnsSpeed / 3600;
  const seconds = Math.floor(+(turns / turnsInSecond));  
  return {turns, seconds};
};
