const eventZone = document.querySelector('.game__zone');
const stopBtn = document.querySelector('.fas.fa-stop');
const startBtn = document.querySelector('.fas.fa-play');
const bugCarrot = document.querySelector('.bug__carrot');
let second = document.querySelector('.second').innerHTML;
let time;

eventZone.addEventListener('click', event => {
  if(event.target.className === 'fas fa-play'){
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    startTimer();
  } else if(event.target.className === 'fas fa-stop') {
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
    if(second == 0){
    document.querySelector('.second').innerHTML = 10;
    second = 10;
    } else if (second > 0){
      clearInterval(time);
    }
  } else if(event.target.className === 'fas fa-undo-alt'){
    const restartBtnDiv = document.querySelector('.message__restart');
    restartBtnDiv.style.display = 'none'
    document.querySelector('.second').innerHTML = 10;
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
  } else {
    return;
  }
});

function startTimer(){
  time = setInterval(timer, 1000);
}

function timer(){
  second = second - 1;
  document.querySelector('.second').innerHTML =  document.querySelector('.second').innerHTML - 1;
  if(second == 0){
    clearInterval(time);
  }
}

class CarrotAndBug {
  
  createCarrot(){
    const newCarrot = document.createElement('img');
    newCarrot.setAttribute('src', 'img/carrot.png');
    newCarrot.setAttribute('class', 'carrot');
    bugCarrot.appendChild(newCarrot);
  }

  createBug(){

  }
}