'use strict'

export default class gameFiled {

  constructor(){
    this.gameField = document.querySelector('.game__field');
    this.gameFiledRect = gameField.getBoundingClientRect();
    this.gameField.addEventListener('click', onFieldClick);
  }

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