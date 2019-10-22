//CODE WARS DUE 10.14.19

/*
1. Convert a String to a Number!

Instructions
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

ANSWER:

var stringToNumber = function(str){
  return parseFloat(str);
}
*/

/*
2. MakeUpperCase

Instructions
Write function makeUpperCase.

ANSWER:

function makeUpperCase(str) {
  return str.toUpperCase()
}
*/

/*
3. Third Angle of a Triangle

Instruction
You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

ANSWER:

function otherAngle(a, b) {
  let c = 180 - a - b
  return c;
}

*/

/*

4. Grasshopper - Messi goals function
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

ANSWER:

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals
  return(sum)
}

*/

/*
5. Function 1 - hello world

Instructions
Make a simple function called greet that returns the most-famous "hello world!".

ANSWER:

function greet(){
return "hello world!"
}

*/
