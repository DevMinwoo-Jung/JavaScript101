const targetBox = document.querySelector('.box');
const target = document.addEventListener('mousemove', (e) => {
  let x = e.screenX;
  let y = e.screenY;
  targetBox.style.marginLeft = Number(String(x) + "px") / 10;
  targetBox.style.marginRight = Number(String(y) + "px") / 10;
  console.log( targetBox.style.marginRight = Number(String(y) + "px") / 10);
});


