const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = []
  members.forEach(elem => {
    if (typeof elem === 'string' && elem.length > 1) {
      arr.push(elem.trim()[0].toUpperCase())
    }
  })
  let result = arr.sort().join('')
  return result;
}

module.exports = {
  createDreamTeam
};


console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])) //=> 'ADMM'
console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])) //=> 'LOO'
console.log(createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]))