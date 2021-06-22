const eventZone = document.querySelector('.game__zone');
const stopBtn = document.querySelector('.fas.fa-stop');
const startBtn = document.querySelector('.fas.fa-play');
const bugCarrot = document.querySelector('.bug__carrot');
const restartBtnDiv = document.querySelector('.message__restart');
const carrot = document.querySelector('.carrot');
const bug = document.querySelector('.bug');
const score = document.querySelector('.score');

let drawingCarrotAndBud = execOnce(drawing);
let second = document.querySelector('.second').innerHTML;
let time;

eventZone.addEventListener('click', event => {
  if(event.target.className === 'carrot'){
    score.innerHTML = Number(score.innerHTML) + 1;
  }
  else if(second == 0 || event.target.className === 'bug'){
    restartBtnDiv.style.display = 'block'
    document.querySelector('.won__lose').innerHTML = 'You Lose';
    second = 10;
    clearInterval(time);
  }
  else if(event.target.className === 'fas fa-play'){
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    drawingCarrotAndBud();
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
    restartBtnDiv.style.display = 'none'
    document.querySelector('.second').innerHTML = 10;
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
  } else if (second){

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

function execOnce(fn, context){
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}

function drawing() {
  for(let i =0; i< 11; i++){
  new CarrotAndBug().createCarrot();
  new CarrotAndBug().createBug(); 
  } 
};


class CarrotAndBug {
  
  createCarrot(){
    const newCarrot = document.createElement('img');
    newCarrot.setAttribute('src', 'img/carrot.png');
    newCarrot.setAttribute('class', 'carrot');
    newCarrot.style.left = Math.random()* 750 + 'px';
    newCarrot.style.top = Math.random()* 500 + 'px';
    bugCarrot.appendChild(newCarrot);
  }
  createBug(){
    const newBug = document.createElement('img');
    newBug.setAttribute('src', 'img/bug.png');
    newBug.setAttribute('class', 'bug');
    newBug.style.left = Math.random()* 750 + 'px';
    newBug.style.top = Math.random()* 500 + 'px';
    bugCarrot.appendChild(newBug);
  }
}

