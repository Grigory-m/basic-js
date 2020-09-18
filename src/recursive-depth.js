const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = (arr) => {
    let count = 1;
    if (arr.find(i =>Array.isArray(i)) === undefined ) {
      return count;
    } else {      
      let depthArray = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          depthArray.push(arr[i][j])
        }
      } 
      count += this.calculateDepth(depthArray);
      return count;
    }    
  }
};