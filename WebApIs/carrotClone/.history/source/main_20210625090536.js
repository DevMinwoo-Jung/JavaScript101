import PopUp from './popup.js';
import Game from './game.js';

'use strict'

const gameFinishBanner = new PopUp();

// const gameField = new Field(10, 10);
// gameField.setClickListener(() => {
//   startGame();
// });

const game = new Game(2, 2, 2);
game.setGameStopListener(reason => {
  console.log(reason);
  let message;
  switch(reason){
    case 'cancle':
      message = 'REPLAY?';
      break;
    case 'win':
      message = 'YOU WON';
      break;
    case 'lose':
      message = 'YOU LOST';
      break;
      default:
        throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
})
gameFinishBanner.setClickListener(() => {
  game.startGame();
});



