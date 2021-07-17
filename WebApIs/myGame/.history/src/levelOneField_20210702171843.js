'use strict'

export default class LvOneField{
  constructor(){
    this.fishes = document.querySelectorAll('.fish');
    this.fish = document.querySelector('.fish');
    this.fish.addEventListener('click', (event) => {
       if(Array.from(this.fishes).indexOf(this.fish)){
         alert("짜잔");
       }
    })
  }

}