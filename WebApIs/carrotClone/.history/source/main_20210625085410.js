import PopUp from './popup.js';
import Field from './filed.js';
import Game from './game.js';

'use strict'

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  game.startGame();
});

const gameField = new Field(game.CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onItemClick);

const game = new Game(20, 20, 20);
game.setGameStopListener(reason => {
  console.log(reason);
})


