//Reversed Strings

/*Instructions
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow' */

//SOLUTION: Longer way

/*
function solution(str){
let splitString = str.split('')
let reverseArray = splitString.reverse()
let joinArray = reverseArray.join('')
 return joinArray
}

solution('world') */


//SOLUTION: COMBINED METHODS

function solution(str){
  return str.split('').reverse().join('')
}

solution('world')
