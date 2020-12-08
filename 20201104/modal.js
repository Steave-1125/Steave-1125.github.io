// function showModal(){
//   console.log("Hello");
//   let modal = document.querySelector("#modal");
//   modal.innerHTML = "<span style='color: red'>showModal()";
// }

// function changeRed(){
//   let modal = document.querySelector("#modal");
//   modal.style.background = "red";
// }
//
// function changeYellow(){
//   let modal = document.querySelector("#modal");
//   modal.style.background = "yellow";
// }
//
// function changeGreen(){
//   let modal = document.querySelector("#modal");
//   modal.style.background = "green";
// }

// function appendCircle(){
//   let modal = document.querySelector("#modal");
//   modal.append("〇");
// }
//
// function appendCross(){
//   let modal = document.querySelector("#modal");
//   modal.append("✕");
// }

function plusOne(){
  let modal = document.querySelector("#modal");
  let numModal = Number(modal.innerHTML);
  modal.innerHTML = numModal + 1;
}

function plusFive(){
  let modal = document.querySelector("#modal");
  let numModal = Number(modal.innerHTML);
  modal.innerHTML = numModal + 5;
}

function plusTen(){
  let modal = document.querySelector("#modal");
  let numModal = Number(modal.innerHTML);
  modal.innerHTML = numModal + 10;
}