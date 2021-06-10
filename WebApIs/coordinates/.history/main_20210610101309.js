const targetBox = document.querySelector('.box');
const verticalRLine = document.querySelector('.verticalRight');
const verticalLLine = document.querySelector('.verticalLeft');

const target = document.addEventListener('click', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  targetBox.style.marginLeft = String(x) + "px";
  targetBox.style.marginTop = String(y) + "px";
  verticalRLine.style.marginTop = String(y) + "px";

});


