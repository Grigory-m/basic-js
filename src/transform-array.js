const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  const disnext = '--discard-next';
  const disprev = '--discard-prev';
  const doubleprev = '--double-prev';
  const doublenext = '--double-next';
  let currentValue;

  const newArr = arr.map((item, i) => {
    
    if (arr[i+1] === disprev) {
      currentValue = item;
      return undefined;
    } else if (arr[i-1] === disnext) {
      currentValue = undefined;
      return undefined;
    } else if (arr[i] === doubleprev && currentValue !== undefined) {
      currentValue = item;
      return arr[i-1];
    } else if (arr[i] === doublenext) {
      currentValue = item;
      return arr[i+1];
    } else {
      currentValue = item;
      return item;
    }        
  })
  return newArr.filter((i) => i !== undefined && i !== disprev && i !== disnext && i !== doublenext && i !== doubleprev);
}
