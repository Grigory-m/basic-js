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
  // let number = 0;
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let j = 0; j < matrix[i].length; j++) {
  //       if (matrix[i][j] == '^^') {
  //         number++;
  //       }
  //     }      
  //   }
  // return number;
  return count;
};
