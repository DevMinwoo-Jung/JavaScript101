const targetBox = document.querySelector('.box');
const levelLine = document.querySelector('.levelLine');
const verticalLine = document.querySelector('.vertical');
const targetLocation = document.querySelector('.location');
const imgSize = document.querySelector('.imgSize');

const target = document.addEventListener('click', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  targetBox.style.left = String(x) + "px";
  targetBox.style.top = String(y) + "px";
  // levelLine.style.marginTop = String(y) + "px";
  // verticalLine.style.marginLeft = String(y) + "px";
  targetLocation.innerText = `X: ${x} Y: ${y}`;

});


