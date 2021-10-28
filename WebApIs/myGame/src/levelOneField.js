
'use strict'
const FISH_SIZE = 50;

export const ItemType = Object.freeze({
  answer: 'answer',
  wrong: 'wrong'
});

export class LvOneField{
  constructor(answrCount, wrongCount){
    this.answrCount = answrCount;
    this.wrongCount = wrongCount;

    this.fish = document.querySelector('.fish');
    this.gameField = document.querySelector('.game__field');
    this.fishDiv = document.querySelector('.fish__div');
    this.fishDivRect = this.fishDiv.getBoundingClientRect();
    this.fieldRect = this.gameField.getBoundingClientRect();
    this.gameField.addEventListener('click', this.onClick);

    this.fishInterval;
    
  
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

    for(let i = 0; i < count ; i ++){
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.gameField.appendChild(item);    
    }
  }

    makeNewPosition(){
    
      let h = document.querySelector('.game__field').getBoundingClientRect().height - 50;
      let w = document.querySelector('.game__field').getBoundingClientRect().width - 50;
      
      let nh = Math.floor(Math.random() * h);
      let nw = Math.floor(Math.random() * w);

      if(this.gameField.getBoundingClientRect().height > nh){
        Math.floor(Math.random() * h );
      }  
      if(this.gameField.getBoundingClientRect().width > nw){
        Math.floor(Math.random() * w );
      }
      return [nh,nw];    
  }
  
  animateFishs(){
    const getRandomMsRange = function(min, max) {
      return Math.random() * (max - min) + min;
    }

    for(let answer of document.querySelectorAll('.answer')){
      let newX =  Math.floor(Math.random() * 500);
      let newY = Math.floor(Math.random() * -300);
      answer.animate(
        [
          { transform: `translate(${newX}px, ${newY}px)`}
        ], 
        {duration: 5000,
        direction: "alternate-reverse",
        easing: 'ease-in-out',
        delay: getRandomMsRange(-1000, 1000), 
        iterationStart: 1,
        iterations: Infinity
        });   
    }

    for(let wrong of document.querySelectorAll('.wrong')){
      let newX =  Math.floor(Math.random() * 500);
      let newY = Math.floor(Math.random() * -200);
      wrong.animate(
        [
          { transform: `translate(${newX}px, ${newY}px)`}
        ], 
        {duration: 5000,
        direction: "alternate-reverse",
        easing: 'ease-in-out',
        delay: getRandomMsRange(-1000, 1000),
        iterationStart: 1,
        iterations: Infinity
        });   
    }
  }
} 

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}

