
// let answerElement = document.querySelector("#answer");
// let output = "<ul>"
//
// // while ver.
// // let i = 0;
// // while(i < fruitNames.length){
// //   output += `<li>${fruitNames[i]}</li>`
// //   i++;
// // }
//
// //for ver
// // for(let i = 0; i < fruitNames.length; i++){
// //   output += `<li>${fruitNames[i]}</li>`;
// // }
//
// //Array#forEach ver
// fruitNames.forEach(function(fruit){
//   output += `<li>${fruit}</li>`;
// });
//
// output += "</ul>";
// answerElement.innerHTML = output;


//3
  let answerElement = document.querySelector("#answer");
  let output = "<ul>";
  for(let i = 0; i < tweets.length; i++) {
    output += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;

