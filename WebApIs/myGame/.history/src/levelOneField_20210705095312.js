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
    this.i = 0;
    this.levelOne = 
    new LevelOneBuilder()
    .withProgressBar(950)
    .withMinusTimerBar(9.5)
    .build();
  }

  init(){
    this.field.innerHTML = '';
    // create bug and carrot 
    this._addItem('carrot', this.carrotCount, 'img/redFish.png');
    this._addItem('carrot', this.carrotCount, 'img/bigEyes.png');
    this._addItem('carrot', this.carrotCount, 'img/orangeFish.png');
    this._addItem('carrot', this.carrotCount, 'img/redFish2.png');
    this._addItem('carrot', this.carrotCount, 'img/dirtyFish.png');
    this._addItem('bug', this.bugCount, 'img/orangeShark.png');
    this._addItem('bug', this.bugCount, 'img/orangeFish2.png');
    this._addItem('bug', this.bugCount, 'img/bigEyes2.png');
  }

  _addFishes(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = this.filedRect.width - CARROT_SIZE;
    const y2 = this.filedRect.height - CARROT_SIZE;
    for(let i = 0; i < count ; i ++){
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute'
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);    
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