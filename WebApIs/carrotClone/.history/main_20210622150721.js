const field = document.querySelector('.game__field');
const filedRect = field.getBoundingClientRect();

function initGame() {
  // create bug and carrot 
  console.log(filedRect);
  addItem('carrot', 5, 'img/carrot.png');
  addItem('bug', 5, 'img/bug.png');
}

initGame();

function addItem(classNmae, count, imgPath){

}