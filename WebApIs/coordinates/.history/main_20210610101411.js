const targetBox = document.querySelector('.box');
const levelLine = document.querySelector('.levelLine');
const verticalLLine = document.querySelector('.verticalLeft');

const target = document.addEventListener('click', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  targetBox.style.marginLeft = String(x) + "px";
  targetBox.style.marginTop = String(y) + "px";
  levelLine.style.marginTop = String(y) + "px";

});


