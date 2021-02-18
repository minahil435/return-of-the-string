/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(myString) {
  return myString + '!';
}
function getFirstCharacter(myString){
  return myString[0];
}
function getLastCharacter(myString){
  return myString[myString.length - 1];
}

function getOneCharacter(myString, index){
  return myString[index];
}

function getTwoCharacters(myString, indexOne, indexTwo){
  return myString[indexOne] + myString[indexTwo];
}
function makeCapitalized(myString){
  return myString.toUpperCase();
}
function yellLouder(myString){
  return makeCapitalized(myString) + "!!!";
} 
function getInitials(name) {
  let indexOfSecondInitial = name.indexOf(' ');
  return name[0] + '.' + name[indexOfSecondInitial + 1] + '.' ;
}


/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
