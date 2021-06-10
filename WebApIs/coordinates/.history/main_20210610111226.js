const levelLine = document.querySelector('.levelLine');
const verticalLine = document.querySelector('.vertical');
const targetLocation = document.querySelector('.location');
const imgSize = document.querySelector('.imgSize');

const target = document.addEventListener('click', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  imgSize.style.left = String(x) + "px";
  imgSize.style.top = String(y) + "px";
  verticalLine.style.left = String(x) + "px";
  verticalLine.style.top = String(y) + "px";
  imgSize.style.left = String(x) + "px";
  targetLocation.style.left = String(x) + "px";
  targetLocation.style.top = String(y) + "px";
  targetLocation.innerText = `X: ${x} Y: ${y}`;

});


