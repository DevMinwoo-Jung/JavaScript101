import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
import LevelOneBuilder from './levelOne.js';
import MessageBox from './messageBox.js';


'use strict'

const scrollBtn = new Scroll();
const startGame = new StartGame();
const itemList = new ItemList();
const messageBox = new MessageBox();
const levelOne = new LevelOneBuilder()
.withProgressBar(900)
.withMinusTimerBar(90)
.build();

// console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;

// startGame.startByClick();
itemList.arrowBtn;
levelOne.timer;

messageBox.setEventListener(levelOne.restart);
