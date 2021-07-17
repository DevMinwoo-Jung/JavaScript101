'use strict'


export default class Scroll {

  constructor(){
    this.levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
    this.levelThreeHeight = document.querySelector('.levelThree--div').getBoundingClientRect().y;
    this.goToLevelTwo = document.querySelector('.goToLvTwoBtn');
    this.goToLvThree = document.querySelector('.goToLvThreeBtn');
    this.goToLevelTwo.addEventListener('click', () => {
      this.onClick && this.onClick(); 
      scrollTo({top:this.levelTwoHeight, behavior: 'smooth'});
    });
    this.goToLvThree.addEventListener('click', () => {
      this.onClick && this.onClick(); 
      scrollTo({top:this.levelThreeHeight, behavior: 'smooth'});
    });
  }
}
