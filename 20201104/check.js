function checkNumber(){
  if(Number(document.querySelector('#num').value)>10){
    window.alert("true");
  } else{
    window.alert("false");
  }
}

function checkUserInput(){
  let input = document.querySelector("#user_input");
  let answer = document.querySelector("#answer");
  if(input.value === "隣の客はよく柿食う客だ"){
    answer.innerHTML = "正解";
  }else{
    answer.innerHTML = "不正解";
  }
}

function checkAge(){
  let input = document.querySelector("#age");
  let answer = document.querySelector("#age_answer");
  if(input.value >= 65){
    answer.innerHTML = "高齢者";
  }
  else if (input.value >= 20){
    answer.innerHTML = "成人";
  }
  else if(input.value <= 0){
    answer.innerHTML = "エラー";
  }
  else{
    answer.innerHTML = "未成年";
  }
}

function checkYear(){
  let input = document.querySelector("#year");
  let answer = document.querySelector("#year_answer");
  if(input.value <= 0){
    answer.innerHTML = "エラー";
  }
  else if(input.value % 400 === 0){
    answer.innerHTML = "閏年";
  }
  else if(input.value % 100 === 0){
    answer.innerHTML = "平年";
  }
  else if(input.value % 4 === 0){
    answer.innerHTML = "閏年";
  }
  else{
    answer.innerHTML = "平年";
  }
}
