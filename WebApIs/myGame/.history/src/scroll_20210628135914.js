'use strict'


export default class scroll {

  constructor(){
    this.levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
    this.levelThreeHeight = document.querySelector('.levelThree--div').getBoundingClientRect().y;
    this.goToLevelTwo = document.querySelector('.goToLvTwoBtn');
    this.goToLvThreeBtn = document.querySelector('.goToLvThreeBtn');
    this.goToLevelTwo.addEventListener('click', () => {
      this.onClick && this.onClick(); 
      scrollTo({top:levelTwoHeight, behavior: 'smooth'});
    });
    this.goToLvThreeBtn.addEventListener('click', () => {
      scrollTo({top:levelThreeHeight, behavior: 'smooth'});
    });
  }
}
