// Instructions:
//
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
//
// ANSWER:


function problem(x){
  let sum = (50 * x) + 6
  if (typeof x === "number"){
    return sum
  }else{
    return "Error"
  }
}
