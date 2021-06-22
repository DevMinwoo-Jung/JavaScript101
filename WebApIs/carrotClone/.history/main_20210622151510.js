const field = document.querySelector('.game__field');
const filedRect = field.getBoundingClientRect();
const CARROT_SIZE = 80;

function initGame() {
  // create bug and carrot 
  console.log(filedRect);
  addItem('carrot', 5, 'img/carrot.png');
  addItem('bug', 5, 'img/bug.png');
}



function addItem(classNmae, count, imgPath){
  const x1 = 0;
  const y1 = 0;
  const x2 = filedRect.width;
  const y2 = filedRect.height;
  for(let i = 0; i < count ; i ++){
    const item = document.createElement('img');
    item.setAttribute('class', classNmae);
    item.setAttribute('src', imgPath);
    item.style.position = 'abslute'
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);    
  }
}

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}

initGame();