/* CodeWar: Third Angle of a Triangle
https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested. */

function otherAngle(a, b) {
  let c = 180-(a + b)
  return c;
}
// testing git
