//Who Ate The Cookie?

/*
INSTRUCTIONS:
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)


ANSWER: */

function cookie(x){
  if (x === x.toString()){
    return "Who ate the last cookie? It was Zach!"
  }else if(x === Number(x)){
    return "Who ate the last cookie? It was Monica!"
  }else{
  return "Who ate the last cookie? It was the dog!"
  }
}
