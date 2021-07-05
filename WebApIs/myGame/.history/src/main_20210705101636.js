import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
import LevelOneBuilder from './levelOne.js';
import MessageBox from './messageBox.js';
import LvOneField from './levelOneField.js';


'use strict'

const scrollBtn = new Scroll();
const startGame = new StartGame();
const itemList = new ItemList();
const messageBox = new MessageBox();
const lvOneField = new LvOneField();
const levelOne = new LevelOneBuilder()
.withProgressBar(950)
.withMinusTimerBar(9.5)
.withAnswrCount(3)
.withWrongCount(5)
.build();

// console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;

// startGame.startByClick();
itemList.arrowBtn;
levelOne.timer;
levelOne.gameOver;



messageBox.setEventListener(levelOne.restart);

lvOneField.checkFish();

