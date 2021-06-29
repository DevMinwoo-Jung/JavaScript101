'use strict'


export default class Scroll {

  constructor(){
    this.levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
    this.levelThreeHeight = document.querySelector('.levelThree--div').getBoundingClientRect().y;
    this.goToLevelTwo = document.querySelector('.goToLvTwoBtn');
    this.goToLvThree = document.querySelector('.goToLvThreeBtn');
    this.goToLevelTwo.addEventListener('click', () => {
      this.onClick && this.onClick(); 
      alert("클릭");
      this.scrollToLvTwo();
    });
    this.goToLvThree.addEventListener('click', () => {
      this.onClick && this.onClick(); 
      alert("클릭");
      this.scrollToLvThree();
    });
  }

  setClickListener(onClick){
    this.onClick = onClick;
  }

  scrollToLvTwo(){
    alert("이거 실행됨...?");
    scrollTo({top:this.levelTwoHeight, behavior: 'smooth'});
  }

  scrollToLvThree(){
    scrollTo({top:this.levelThreeHeight, behavior: 'smooth'});
  }
}
