function All_tweet(){
  let answerElement = document.querySelector("#tweet");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < tweets.length; i++) {
    output += `<li> <img src="${tweets[i].avatar}" width=100 height=100> <b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function Sabro_tweet(){
  let answerElement = document.querySelector("#tweet");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < tweets.length; i++) {
    if(tweets[i].name != "三郎BOT"){
      continue;
    }
    output += `<li> <img src="${tweets[i].avatar}" width=100 height=100> <b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function ziro_tweet(){
  let answerElement = document.querySelector("#tweet");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < tweets.length; i++) {
    if(tweets[i].name != "次郎"){
      continue;
    }
    output += `<li> <img src="${tweets[i].avatar}" width=100 height=100> <b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}

function taro_tweet(){
  let answerElement = document.querySelector("#tweet");
  let output = "<ul style='list-style: none;'>";
  for(let i = 0; i < tweets.length; i++) {
    if(tweets[i].name != "太郎"){
      continue;
    }
    output += `<li> <img src="${tweets[i].avatar}" width=100 height=100> <b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  }
  output += "</ul>";
  answerElement.innerHTML = output;
}