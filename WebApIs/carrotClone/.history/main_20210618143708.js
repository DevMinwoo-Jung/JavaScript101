const eventZone = document.querySelector('.game__zone');


eventZone.addEventListener('click', event => {
  if(event.target.className === 'start__button'){
    alert("스타트 버튼이유");
  } else if(event.target.className === 'fas fa-undo-alt'){
    alert("재시작 버튼이유");
  } else {
    return;
  }
});