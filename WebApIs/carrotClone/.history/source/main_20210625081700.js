import PopUp from './popup.js';
import Field from './filed.js';
import Game from './game.js';

'use strict'

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const game = new Game();

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  game.startGame();
});

const gameField = new Field(game.CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onItemClick);


function onItemClick(item){
  if(!game.started){
    return;
  }
  if(item === 'carrot'){
    game.score++;
    game.updateScoreBoard();
    if(game.score == CARROT_COUNT){
      game.finishGame(true);
    }
  } else if(item === 'bug'){
    // 벌레!!
    game.finishGame(false);
  }
}


