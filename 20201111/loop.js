// function doloop1(){
//   let answerElement = document.querySelector("#answer_1");
//   let i = 0;
//   let ans = 0;
//   while(i <= 10000){
//     ans += i;
//     if(ans>=50000){
//       break;
//     }
//     i++;
//   }
//   answerElement.innerHTML = ans;
// }

function doloop2(){
  let answerElement = document.querySelector("#answer_2");

  let i = 1;
  while(i <= 100){
    let message = ""

    if (i % 3 === 0 && i % 5 === 0){
      message = "FizzBuzz";
    }
    else if(i % 5 === 0){
     message = "Buzz";
    }
    else if(i % 3 === 0){
      message = "Fizz";
    }
    else{
      message = i;
    }
    answerElement.innerHTML = answerElement.innerHTML + message + "<br>";
    i++;
  }
}