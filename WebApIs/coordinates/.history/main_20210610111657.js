const levelLine = document.querySelector('.levelLine');
const verticalLine = document.querySelector('.vertical');
const targetLocation = document.querySelector('.location');
const imgSize = document.querySelector('.imgSize');

const target = document.addEventListener('mousemove', (e) => {
  // 좌표
  let x = e.pageX;
  let y = e.pageY;
  
  // 이미지 위치
  imgSize.style.left = String(x) + "px";
  imgSize.style.top = String(y) + "px";
  
  // 수직위치
  verticalLine.style.left = String(x) + "px";
  
  // 수평위치
  levelLine.style.top = String(y) + "px";
  
  // 좌표 위치
  targetLocation.style.left = String(x) + "px";
  targetLocation.style.top = String(y) + "px";
  targetLocation.innerText = `X: ${x} Y: ${y}`;

});


