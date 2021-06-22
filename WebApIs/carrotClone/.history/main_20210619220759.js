const eventZone = document.querySelector('.game__zone');
const stopBtn = document.querySelector('.fas.fa-stop');
const startBtn = document.querySelector('.fas.fa-play');
let second = 11;

eventZone.addEventListener('click', event => {
  if(event.target.className === 'fas fa-play'){
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
  } else if(event.target.className === 'fas fa-stop') {
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
  } else if(event.target.className === 'fas fa-undo-alt'){
    const restartBtnDiv = document.querySelector('.message__restart');

    restartBtnDiv.style.display = 'none'
  } else {
    return;
  }
});

function minusTime(){
  for(let i=0; i<11; i++){
    setTimeout(timer, 1000);
  }
}

function timer(){
  console.log(second);
  return second - 1;
}