'use strict'

export default class GameFieled {

  constructor(){
    this.field = document.querySelector('.game__field');
    this.fledRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', () => {
      this.onClick && this.onClick();
    });
  }

  setClickListener(onClick){
    this.onClick = onClick;
  }

  
  started = false;

  onFieldClick(event){
    if(!started){
  
      return;
    }
    const target = event.target;
    if(target.matches('.carrot')){
      // 당근!!
      playSound(carrotSound);
      target.remove();
      score++;
      updateScoreBoard();
      if(score == CARROT_COUNT){
        finishGame(true);
      }
    } else if(target.matches('.bug')){
      // 벌레!!
      finishGame(false);
    }
  }
}