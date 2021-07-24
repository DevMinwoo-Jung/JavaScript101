import PopUp from './popup.js';
import {Reason,GameBuilder} from './game.js';
import * as sound from './sound.js'

'use strict'

const gameFinishBanner = new PopUp();

// const gameField = new Field(10, 10);
// gameField.setClickListener(() => {
//   startGame();
// });

const game = new GameBuilder()
.withGameDuration(5)
.withCarrotCount(3)
.withBugCount(3)
.build();
// 어떤 값을 설정했는지 알아보기 쉽다.
game.setGameStopListener(reason => {
  console.log(reason);
  let message;
  switch(reason){
    case Reason.cancel:
      message = 'REPLAY?';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WON';
      sound.playWin();
      break;
    case Reason.lose:
      message = 'YOU LOST';
      sound.playBug();
      break;
      default:
        throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
})
gameFinishBanner.setClickListener(() => {
  game.start();
});



