const food = ["https://github.com/Steave-1125/Steave-1125.github.io/blob/master/Lunchboard/img/beef.png?raw=true","https://github.com/Steave-1125/Steave-1125.github.io/blob/master/Lunchboard/img/corry.png?raw=true","https://github.com/Steave-1125/Steave-1125.github.io/blob/master/Lunchboard/img/karaage.png?raw=true","https://github.com/Steave-1125/Steave-1125.github.io/blob/master/Lunchboard/img/kushikatsu.png?raw=true"];
let num = -1;


function slideshow_timer(){
  if (num === 3){
    num = 0;
  }
  else {
    num ++;
  }
  document.getElementById("foods").src = food[num];
}

setInterval(slideshow_timer, 3000);