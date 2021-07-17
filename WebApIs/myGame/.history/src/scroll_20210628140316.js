'use strict'


export default class Scroll {

  constructor(){
    this.levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
    this.levelThreeHeight = document.querySelector('.levelThree--div').getBoundingClientRect().y;
    this.goToLevelTwo = document.querySelector('.goToLvTwoBtn');
    this.goToLvThree = document.querySelector('.goToLvThreeBtn');
    this.goToLevelTwo.addEventListener('click', () => {
      this.onClick && this.onClick(); 
      scrollTo({top:levelTwoHeight, behavior: 'smooth'});
    });
    this.goToLvThree.addEventListener('click', () => {
      scrollTo({top:levelThreeHeight, behavior: 'smooth'});
    });
  }
}
