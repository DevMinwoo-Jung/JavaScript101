'use strict'
const FISH_SIZE = 50;

export default class LvOneField{
  constructor(answrCount, wrongCount){
    this.answrCount = answrCount;
    this.wrongCount = wrongCount;

    this.fish = document.querySelector('.fish');
    this.gameField = document.querySelector('.game--field');
    this.fieldRect = this.gameField.getBoundingClientRect();

  }

  init(){
    this.field.innerHTML = '';
    // create bug and carrot 
    this._addFishes('carrot', this.answrCount, 'img/redFish.png');
    this._addFishes('carrot', this.answrCount, 'img/bigEyes.png');
    this._addFishes('carrot', this.answrCount, 'img/orangeFish.png');
    this._addFishes('carrot', this.answrCount, 'img/redFish2.png');
    this._addFishes('carrot', this.answrCount, 'img/dirtyFish.png');
    this._addFishes('bug', this.wrongCount, 'img/orangeShark.png');
    this._addFishes('bug', this.wrongCount, 'img/orangeFish2.png');
    this._addFishes('bug', this.wrongCount, 'img/bigEyes2.png');
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
      this.fieldRect.appendChild(item);    
    }
  }

}

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}