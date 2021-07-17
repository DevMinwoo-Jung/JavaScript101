'use strict'

export default class LvOneField{
  constructor(){
    this.fishes = document.querySelectorAll('.fish');
    this.fish = document.querySelector('.fish');
    this.fish.addEventListener('click', () => {
      
      alert("되는겨?");
    })
  }

}