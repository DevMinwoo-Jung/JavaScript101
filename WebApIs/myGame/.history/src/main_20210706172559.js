// import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
import LevelOneBuilder from './levelOne.js';
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

startGame.startByClick();
itemList.arrowBtn;
levelOne.timer;
levelOne.initGame;


messageBox.setEventListener(levelOne.restart);

levelOne.checkFish();

