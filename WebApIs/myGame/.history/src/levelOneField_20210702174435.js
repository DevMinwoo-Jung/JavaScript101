'use strict'

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
  }

  checkFish(){
    for(let answer of this.answers){
      answer.addEventListener('click', () => {
        console.log(this.answer);
        console.log(this.answer.className);
      });
     for(let wrong of this.wrongs){
      wrong.addEventListener('click', () => {
         console.log(this.wrong);
         console.log(this.wrong.className);
       });
     } 
    }
  }
}