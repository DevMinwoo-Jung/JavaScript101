'use strict'


export default class Scroll {

  constructor(){
    this.levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
    this.goToLevelTwo = document.querySelector('.goToLvTwoBtn');
    this.goToLevelTwo.addEventListener('click', () => {
      this.onClick && this.onClick(); 
      scrollTo({top:this.levelTwoHeight, behavior: 'smooth'});
    });
  }

  setClickListener(onClick){
    this.onClick = onClick;
  }
}
