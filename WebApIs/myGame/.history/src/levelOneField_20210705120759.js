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
    this.gameField = document.querySelector('.game--field');
    this.fieldRect = this.gameField.getBoundingClientRect();

    this.gameField.addEventListener('click', this.onClick);

  }

  setClickListener(onItemClick){
    this.onItemClick = onItemClick;
  }

  init(){
    this.fieldRect.innerHTML = '';
    console.log("여기는 왜 안오니?");
    // create bug and carrot 
    this._addFishes('fish red answer', this.answrCount, 'img/redFish.png');
    this._addFishes('fish bigEyes answer', this.answrCount, 'img/bigEyes.png');
    this._addFishes('fish orange answer', this.answrCount, 'img/orangeFish.png');
    this._addFishes('fish red2 answer', this.answrCount, 'img/redFish2.png');
    this._addFishes('fish dirty answer', this.answrCount, 'img/dirtyFish.png');
    this._addFishes('fish orangeShark wrong', this.wrongCount, 'img/orangeShark.png');
    this._addFishes('fish orange2 wrong', this.wrongCount, 'img/orangeFish2.png');
    this._addFishes('fish bigEyes2 wrong', this.wrongCount, 'img/bigEyes2.png');
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
      item.style.position = 'absolute'
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.gameField.appendChild(item);    
    }
  }

  onClick = event =>{
    const target = event.target;
    console.log(target);
    if(target.indexOf('answer')){
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.answer);
    } else if(target.indexOf('wrong')){
      this.onItemClick && this.onItemClick(ItemType.wrong);
      target.remove();

    }
  }
}

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}