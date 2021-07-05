'use strict'
import LevelOneBuilder from './levelOne.js';
const FISH_SIZE = 50;

export default class LvOneField{
  constructor(answrCount, wrongCount){
    this.answrCount = answrCount;
    this.wrongCount = wrongCount;

    this.answers = document.querySelectorAll('.answer');
    this.wrongs = document.querySelectorAll('.wrong');
    this.fish = document.querySelector('.fish');
    this.gameField = document.querySelector('.game--field');
    this.fieldRect = this.gameField.getBoundingClientRect();
    this.i = 0;

  }

  init(){
    this.field.innerHTML = '';
    // create bug and carrot 
    this._addFishes('carrot', this.carrotCount, 'img/redFish.png');
    this._addFishes('carrot', this.carrotCount, 'img/bigEyes.png');
    this._addFishes('carrot', this.carrotCount, 'img/orangeFish.png');
    this._addFishes('carrot', this.carrotCount, 'img/redFish2.png');
    this._addFishes('carrot', this.carrotCount, 'img/dirtyFish.png');
    this._addFishes('bug', this.bugCount, 'img/orangeShark.png');
    this._addFishes('bug', this.bugCount, 'img/orangeFish2.png');
    this._addFishes('bug', this.bugCount, 'img/bigEyes2.png');
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

  checkFish(){
    for(let answer of this.answers){
      answer.addEventListener('click', () => {
        answer.remove();
      });
    }
    for(let wrong of this.wrongs){
      wrong.addEventListener('click', () => {
        wrong.remove();
        this.levelOne.minusHearts(this.i);
        this.i++;
       });
     } 
  }


}

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}