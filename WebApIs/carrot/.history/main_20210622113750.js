const eventZone = document.querySelector('.game__zone');
const stopBtn = document.querySelector('.fas.fa-stop');
const startBtn = document.querySelector('.fas.fa-play');
const bugCarrot = document.querySelector('.bug__carrot');
const restartBtnDiv = document.querySelector('.message__restart');
const score = document.querySelector('.score');

let second = document.querySelector('.second').innerHTML;
let time;
let carrot;
let bug;

eventZone.addEventListener('click', event => {
if(event.target.className === 'fas fa-play'){
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    if((carrot == undefined && bug == undefined)
    || (document.querySelector('.carrot') == null && document.querySelector('.bug') == null)){
      drawing();
    }
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
  } else if(event.target.className === 'carrot'){
    event.target.remove();
    score.innerHTML = Number(score.innerHTML) + 1;
    if(document.querySelectorAll('.carrot') == null
    || document.querySelectorAll('.carrot').length == 0){
      restartBtnDiv.style.display = 'block'
      document.querySelector('.won__lose').innerHTML = 'You Won!';
      second = 10;
      clearInterval(time);
    }
  } else if(second == 0 || event.target.className === 'bug'){
    const carrotImg = document.querySelector('.carrot');
    const bugImg = document.querySelector('.bug');
    restartBtnDiv.style.display = 'block'
    carrotImg.style.pointerEvents = "none";
    bugImg.style.pointerEvents = "none";
    document.querySelector('.won__lose').innerHTML = 'You Lose!';
    second = 10;
    clearInterval(time);
  } else if(event.target.className === 'fas fa-undo-alt'){
    let bugs = document.querySelectorAll('.bug');
    let carrots = document.querySelectorAll('.carrot');
    for(let bug of bugs){
        bug.remove();
      }
    for(let carrot of carrots){
      carrot.remove();
    }  
    restartBtnDiv.style.display = 'none'
    document.querySelector('.second').innerHTML = 10;
    document.querySelector('.score').innerHTML = 0;
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

function removeBug(){
  let bugs = document.querySelectorAll('.bug');
  document.querySelector('.fas.fa-undo-alt').addEventListener('click', () => {
  for(let bug of bugs){
      bug.remove();
    }
  })
}

function drawing() {
  for(let i = 0; i< 11; i++){
  new CarrotAndBug().createCarrot();
  new CarrotAndBug().createBug(); 
  carrot = document.querySelectorAll('.carrot');
  bug = document.querySelectorAll('.bug');
  } 
};


class CarrotAndBug {
  
  createCarrot(){
    const newCarrot = document.createElement('img');
    newCarrot.setAttribute('src', 'img/carrot.png');
    newCarrot.setAttribute('class', 'carrot');
    newCarrot.style.left = Math.random()* 1800 + 'px';
    newCarrot.style.top = Math.random()* 500 + 'px';
    bugCarrot.appendChild(newCarrot);
  }
  createBug(){
    const newBug = document.createElement('img');
    newBug.setAttribute('src', 'img/bug.png');
    newBug.setAttribute('class', 'bug');
    newBug.style.left = Math.random()* 1300 + 'px';
    newBug.style.top = Math.random()* 500 + 'px';
    bugCarrot.appendChild(newBug);
  }
}

