const eventZone = document.querySelector('.game__zone');
const stopBtn = document.querySelector('.fas.fa-stop');
const startBtn = document.querySelector('.fas.fa-play');

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


function timer(){
  
  for(let second = 10; second >= 0; second--){
    console.log(second);
    if(second = 0){
      return;
    }
  }

}