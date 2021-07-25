'use strict'
const FISH_SIZE = 50;
const FISH_DIV_SIZE = 70;

export const ItemType = Object.freeze({
  answer: 'answer',
  wrong: 'wrong'
});

export class LvOneField{
  constructor(answrCount, wrongCount){
    this.answrCount = answrCount;
    this.wrongCount = wrongCount;

    this.fish = document.querySelector('.fish');
    this.gameField = document.querySelector('.game__field');
    this.fishDiv = document.querySelector('.fish__div');
    this.fishDivRect = this.fishDiv.getBoundingClientRect();
    this.fieldRect = this.gameField.getBoundingClientRect();
    this.gameField.addEventListener('click', this.onClick);
    
  
  }

  setClickListener(onItemClick){
    this.onItemClick = onItemClick;
  }

  init(){
    this.fieldRect.innerHTML = '';
    this._addFishes('fish red answer', this.answrCount, 'img/redFish.png');
    this._addFishes('fish bigEyes answer', this.answrCount, 'img/bigEyes.png');
    this._addFishes('fish orange answer', this.answrCount, 'img/orangeFish.png');
    this._addFishes('fish red2 answer', this.answrCount, 'img/redFish2.png');
    this._addFishes('fish dirty answer', this.answrCount, 'img/dirtyFish.png');
    this._addFishes('fish orangeShark wrong', this.wrongCount, 'img/orangeShark.png');
    this._addFishes('fish orange2 wrong', this.wrongCount, 'img/orangeFish2.png');
    this._addFishes('fish bigEyes2 wrong', this.wrongCount, 'img/bigEyes2.png');
  }

  onClick = event =>{
    const target = event.target;
    
    if(target.matches('.answer')){
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.answer);
    } else if(target.matches('.wrong')){
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.wrong);
    }
  }

  
  _addFishes(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - FISH_SIZE;
    const y2 = this.fieldRect.height - FISH_SIZE;

    const fishDivW = this.fishDivRect.width - FISH_DIV_SIZE;
    const fishDivH = this.fishDivRect.height - FISH_DIV_SIZE;

    for(let i = 0; i < count ; i ++){
      const fisiDiv = document.createElement('div');
      fisiDiv.setAttribute('class', 'fish__div');
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'relative'
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      const fishX = randomNumber(x1, fishDivW);
      const fishY = randomNumber(y1, fishDivH);
      fisiDiv.style.left = `${x}px`;
      fisiDiv.style.top = `${y}px`;
      item.style.left = `${fishX}px`;
      item.style.top = `${fishY}px`;
      this.gameField.appendChild(fisiDiv);    
      fisiDiv.appendChild(item);   
    }
  }


  animateFish() {
      for(let wrong of document.querySelectorAll('.wrong')){
        let currX = this.fishDivRect.width - FISH_SIZE;
        let currY = this.fishDivRect.height - FISH_SIZE;
        let newX =  Math.floor(Math.random() * currX);
        let newY = Math.floor(Math.random() * currY);
        wrong.animate(
          [
            { transform: `translate(${newX}px, ${newY}px)`}
          ], 
          {duration: 1000,
          iterations: Infinity,
          direction: 'alternate'
          });   
      }; 
      for(let answer of document.querySelectorAll('.answer')){
        let currX = this.fishDivRect.width - FISH_SIZE;
        let currY = this.fishDivRect.height - FISH_SIZE;
        let newX =  Math.floor(Math.random() * currX);
        let newY = Math.floor(Math.random() * currY);
        answer.animate(
          [
            { transform: `translate(${newX}px, ${newY}px)`}
          ], 
          {duration: 1000,
          iterations: Infinity,
          direction: 'alternate-reverse'
          });   
      }
    }

    makeNewPosition(){
    
      // Get viewport dimensions (remove the dimension of the div)
      let h = document.querySelector('.game__field').getBoundingClientRect().height - 50;
      let w = document.querySelector('.game__field').getBoundingClientRect().width - 50;
      
      let nh = Math.floor(Math.random() * h);
      let nw = Math.floor(Math.random() * w);

      if(this.gameField.getBoundingClientRect().height > nh){
        Math.floor(Math.random() * h );
      }  
      if(this.gameField.getBoundingClientRect().width > nw){
        Math.floor(Math.random() * w );
      }
      return [nh,nw];    
  }
  
  animateDiv(){
      let newq = this.makeNewPosition();
      // let oldq = $('.a').offset();
      // let speed = this.calcSpeed([oldq.top, oldq.left], newq);
     
      // document.querySelector('.wrong').animate({transform: `translate(${newq[0]}px, ${newq[1]}px)`}, function(){
      //   this.animateDiv();        
      // });
      for(let wrong of document.querySelectorAll('.wrong')){
        wrong.animate({top: `${newq[0]}px`, left: `${newq[1]}px`}, 
            {duration: 5000,
            iterations: Infinity,
            direction: 'alternate-reverse'
            }, function() {this.animateDiv()});   
          };  
        // , this.animateDiv()
      //   wrong.animate( 
      //     [
      //       { transform: `translate(${newX}px, ${newY}px)`}
      //     ], 
      //     {duration: 1000,
      //     iterations: Infinity,
      //     direction: 'alternate-reverse'
      //     });   
      // }      

  }
} 

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}