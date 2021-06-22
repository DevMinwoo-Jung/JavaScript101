const eventZone = document.querySelector('.game__zone');


eventZone.addEventListener('click', event => {
  if(event.target.className === 'fas fa-stop' 
  || event.target.className === 'fas fa-play'){
    const startButton = document.querySelector('.fas.fa-stop');
    const stopBUtton = document.querySelector('.fas.fa-play');
    startButton.style.display = 'none';
    stopBUtton.style.display = 'block';


    console.log(startButton, stopBUtton);


  } else if(event.target.className === 'fas fa-undo-alt'){
    alert("재시작 버튼이유");
  } else {
    return;
  }
});