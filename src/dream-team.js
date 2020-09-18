const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = '';
  if (!(members instanceof Array)) return false;
  for (let i = 0; i < members.length; i++) {
    if(typeof(members[i]) !== 'string') {
      continue;
    } else name += members[i].trim().toUpperCase().slice(0, 1);
  }
  if (name == '') return false;
  return Array.from(name).sort().join('');
};
