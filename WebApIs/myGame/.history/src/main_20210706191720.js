// import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
import {Reason ,LevelOneBuilder} from './levelOne.js';
import MessageBox from './messageBox.js';


'use strict'

// const scrollBtn = new Scroll();
const startGame = new StartGame();
const itemList = new ItemList();
const messageBox = new MessageBox();
const levelOne = new LevelOneBuilder()
.withProgressBar(450)
.withMinusTimerBar(4.5)
.withAnswrCount(2)
.withWrongCount(3)
.build();

// console.log(scrollBtn);
// scrollBtn.goToLevelTwo;
// scrollBtn.goToLvThree;

levelOne.setGameStopListener(reason => {
  console.log(reason);
  let message;
  switch(reason){
    case Reason.cancel:
      message = 'REPLAY?';

      break;
    case Reason.win:
      message = 'YOU WON';

      break;
    case Reason.lose:
      message = 'YOU LOST';

      break;
      default:
        throw new Error('not valid reason');
  }
  messageBox.showWithText(message);
})
// messageBox.setEventListener(() => {
//   levelOne.initGame();
// });

startGame.startByClick();
messageBox.setEventListener(levelOne.restart);

levelOne.checkFish();

