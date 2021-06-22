const eventZone = document.querySelector('.game__zone');
const stopBUtton = document.querySelector('.fas.fa-stop');
const startButton = document.querySelector('.fas.fa-play');

eventZone.addEventListener('click', event => {
  if(event.target.className === 'fas fa-play'){
    startButton.style.display = 'none';
    stopBUtton.style.display = 'block';
  } else if(event.target.className === 'fas fa-stop') {
    startButton.style.display = 'block';
    stopBUtton.style.display = 'none';
  } else if(event.target.className === 'fas fa-undo-alt'){
    const restartButton = document.querySelector('fas.fa-duno-alt');
    restartButton.style.display = 'none'
  } else {
    return;
  }
});