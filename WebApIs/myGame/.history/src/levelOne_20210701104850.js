'use strict'



export default class LevelOne{
  constructor(){
    this.timer = document.querySelector('.timer--bar').style.width;
  }

  timer(){
    this.timer = this.timer - (this.timer * 0.01); 
  }
}