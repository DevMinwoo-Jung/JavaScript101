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
.withProgressBar(490)
.withMinusTimerBar(4.9)
.withAnswrCount(2)
.withWrongCount(3)
.build();


levelOne.setGameStopListener(reason => {
  let message;
  switch(reason){
    case Reason.win:
      message = 'Great Catch!';
      break;
    case Reason.lose:
      message = 'YOU LOST';
      break;
      default:
        throw new Error('not valid reason');
  }
  messageBox.showWithText(message);
})

messageBox.setEventListener(() => {
  levelOne.reset();
});

