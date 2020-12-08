let answerElement = document.querySelector("#tweet");
let output = "<ul>";
for(let i = 0; i < tweets.length; i++) {
  output += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i> ${tweets[i].avatar} </li>`;
}
output += "</ul>";
answerElement.innerHTML = output;

function All_tweet(){
  let answerElement = document.querySelector("#tweet");
  let output = "<ul>";
  for(let i = 0; i < tweets.length; i++) {
    output += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i> ${tweets[i].avatar} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function Sabro_tweet(){
  let answerElement = document.querySelector("#tweet");
  let output = "<ul>";
  for(let i = 0; i < tweets.length; i++) {
    if(tweets[i].name != "三郎BOT"){
      continue;
    }
    output += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i> ${tweets[i].avatar} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function ziro_tweet(){
  let answerElement = document.querySelector("#tweet");
  let output = "<ul>";
  for(let i = 0; i < tweets.length; i++) {
    if(tweets[i].name != "次郎"){
      continue;
    }
    output += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i> ${tweets[i].avatar} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function taro_tweet(){
  let answerElement = document.querySelector("#tweet");
  let output = "<ul>";
  for(let i = 0; i < tweets.length; i++) {
    if(tweets[i].name != "太郎"){
      continue;
    }
    output += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i> ${tweets[i].avatar} </li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}
