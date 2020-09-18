const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  const disnext = '--discard-next';
  const disprev = '--discard-prev';
  const doubleprev = '--double-prev';
  const doublenext = '--double-next';
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === disprev || arr[0] === doubleprev) arr.splice(0, 1);
    if (arr[arr.length-1] === doublenext || arr[arr.length-1] === disnext) arr.splice(arr.length-1, 1);
    if (arr[i] === doubleprev) arr.splice(i, 1, arr[i-1]);
    if (arr[i] === doublenext) arr.splice(i, 1, arr[i+1]);    
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === disprev) arr.splice(0, 1);
    if (arr[arr.length-1] === disnext) arr.splice(arr.length-1, 1);
    if (arr[i] === disprev) {arr.splice(i-1, 2);i--;}
    if (arr[i] === disnext) {arr.splice(i, 2);i--;}   
  }
  return arr;
};
