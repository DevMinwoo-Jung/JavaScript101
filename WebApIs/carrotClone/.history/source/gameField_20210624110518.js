'use strict'

export default class GameField {

  constructor(){
    this.field = document.querySelector('.game__field');
    this.carrotSound = new Audio('./sound/carrot_pull.mp3');
    this.CARROT_SIZE = 80;
    this.field.addEventListener('click', onFieldClick);
    this.filedRect = this.field.getBoundingClientRect();
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

  addItem(classNmae, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = filedRect.width - CARROT_SIZE;
    const y2 = filedRect.height - CARROT_SIZE;
    for(let i = 0; i < count ; i ++){
      const item = document.createElement('img');
      item.setAttribute('class', classNmae);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute'
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      field.appendChild(item);    
    }
  }
  
  randomNumber(min, max){
    return Math.random() * (max - min) + min;
  }
}