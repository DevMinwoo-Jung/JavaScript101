'use strict'

export default class LevelOne{
  constructor(){
    this.timerBar = document.querySelector('.timer--bar');
    this.progressBar = 950;
    this.minusTimeBar = 9.5;
    this.timer;
    this.timerBar.addEventListener('click', () => {
       this.timer = setInterval(this.startTimer, 100);
    })
  }

  startTimer = () =>{
    if(this.progressBar > 0){
      this.timerBar.style.width = this.progressBar - this.minusTimeBar +'px';
      this.progressBar = this.progressBar - this.minusTimeBar;
      this.barColorChange();
      console.log(this.progressBar);
    } else if (this.progressBar == 0) {
      this.stopGame();
    }
  }

  barColorChange(){
    console.log(this.timerBar);
    if(this.timerBar.style.width < '300px'){
      this.timerBar.style.backgroundColor = 'red';
      this.timerBar.style.transform = 'scale(1.05)'
    }
  }

  stopGame() {
      clearInterval(this.timer);
      console.log('꺅');
  }
}