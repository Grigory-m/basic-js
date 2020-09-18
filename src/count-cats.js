const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let count = 0;
  if (!(matrix[0] instanceof Array)) {
    matrix.forEach((el) => {
      if(el === '^^') count++;
    });
    return count;
  }
  matrix.forEach((elem) => {
    elem.forEach((el) => {
      if (el === '^^') count++;
    });
  });
  return count;
};
