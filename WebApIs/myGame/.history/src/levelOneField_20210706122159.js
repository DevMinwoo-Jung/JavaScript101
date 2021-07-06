'use strict'
const FISH_SIZE = 50;
const FISH_DIV_SIZE = 50;

export const ItemType = Object.freeze({
  answer: 'answer',
  wrong: 'wrong'
});

export class LvOneField{
  constructor(answrCount, wrongCount){
    this.answrCount = answrCount;
    this.wrongCount = wrongCount;

    this.fish = document.querySelector('.fish');
    this.answers = document.querySelectorAll('.answer');
    this.wrongs = document.querySelectorAll('.wrong');
    this.gameField = document.querySelector('.game--field');
    this.fishDiv = document.querySelector('.fish--div');
    this.fishDivRect = this.fishDiv.getBoundingClientRect();
    
    this.fieldRect = this.gameField.getBoundingClientRect();

    this.gameField.addEventListener('click', this.onClick);

  }

  setClickListener(onItemClick){
    this.onItemClick = onItemClick;
  }

  init(){
    this.fieldRect.innerHTML = '';
    this._addFishes('fish red answer', this.answrCount, 'img/redFish.png');
    this._addFishes('fish bigEyes answer', this.answrCount, 'img/bigEyes.png');
    this._addFishes('fish orange answer', this.answrCount, 'img/orangeFish.png');
    this._addFishes('fish red2 answer', this.answrCount, 'img/redFish2.png');
    this._addFishes('fish dirty answer', this.answrCount, 'img/dirtyFish.png');
    this._addFishes('fish orangeShark wrong', this.wrongCount, 'img/orangeShark.png');
    this._addFishes('fish orange2 wrong', this.wrongCount, 'img/orangeFish2.png');
    this._addFishes('fish bigEyes2 wrong', this.wrongCount, 'img/bigEyes2.png');
  }

  onClick = event =>{
    const target = event.target;
    
    if(target.matches('.answer')){
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.answer);
    } else if(target.matches('.wrong')){
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.wrong);

    }
  }

  
  _addFishes(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - FISH_SIZE;
    const y2 = this.fieldRect.height - FISH_SIZE;

    const fishDivW = this.fishDivRect.width - FISH_DIV_SIZE;
    const fishDivH = this.fishDivRect.height - FISH_DIV_SIZE;

    for(let i = 0; i < count ; i ++){
      const fisiDiv = document.createElement('div');
      fisiDiv.setAttribute('class', 'fish--div');
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute'
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      const fishX = randomNumber(x1, fishDivW);
      const fishY = randomNumber(y1, fishDivH);
      fisiDiv.style.left = `${x}px`;
      fisiDiv.style.top = `${y}px`;
      item.style.left = `${fishX}px`;
      item.style.top = `${fishY}px`;
      this.gameField.appendChild(fisiDiv);    
      fisiDiv.appendChild(item);   
    }
  }

  makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    let h = this.fieldRect.offsetWidth - FISH_SIZE;
    let w = this.fieldRect.offsetHeight - FISH_SIZE;
    let newHeight = Math.floor(Math.random() * h);
    let newWidth = Math.floor(Math.random() * w);
    
    return [newHeight,newWidth];    
    
  }

  animateFish() {
    for(let wrong of document.querySelectorAll('.wrong')){
      let currX = this.fishDivRect.Width - FISH_SIZE;
      let currY = this.fishDivRect.Height - FISH_SIZE;
      // wrong.getBoundingClientRect().width
      //= wrong.getBoundingClientRect().height 
      let newX =  Math.floor(Math.random() * currX);
      let newY = Math.floor(Math.random() * currY);
      // console.log(`new ${newX}, ${newY}`);
      // console.log(`curr ${currX}, ${currY}`);
      console.log(wrong.getBoundingClientRect());
      wrong.animate(
        [
          { transform: `translate(${newX}px, ${newY}px)`}
        ], 
        {duration: 1000,
        iterations: Infinity,
        direction: 'alternate',
        function(){ this.animateFish();}
        });   
    }; 
  }

  calcSpeed(prev, next) {
    
    let x = Math.abs(prev[1] - next[1]);
    let y = Math.abs(prev[0] - next[0]);
    let greatest = x > y ? x : y;
    let speedModifier = 0.1;
    let speed = Math.abs(Math.ceil(greatest/speedModifier));

    return speed;

  }
}

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}