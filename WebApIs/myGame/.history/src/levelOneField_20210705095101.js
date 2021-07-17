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