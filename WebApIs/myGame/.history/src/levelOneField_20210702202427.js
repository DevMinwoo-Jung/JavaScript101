'use strict'
import LevelOneBuilder from './levelOne.js';

export default class LvOneField{
  constructor(){
    this.answers = document.querySelectorAll('.answer');
    this.wrongs = document.querySelectorAll('.wrong');
    this.fish = document.querySelector('.fish');
    // this.fish.addEventListener('click', (event) => {
    //    if(Array.from(this.fishes).indexOf(this.fish)){
    //      alert("짜잔");
    //    }
    // })
    this.levelOne = 
    new LevelOneBuilder()
    .withProgressBar(950)
    .withMinusTimerBar(9.5)
    .build();
  }

  checkFish(){
    for(let answer of this.answers){
      answer.addEventListener('click', () => {
        answer.remove();
      });
    }
    for(let wrong of this.wrongs){
      wrong.addEventListener('click', () => {
         this.levelOne.minusHearts();
       });
     } 
  }
}