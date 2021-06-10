const targetBox = document.querySelector('.box');
const target = document.addEventListener('mousemove', (e) => {
  let x = e.screenX;
  let y = e.screenY;
  targetBox.style.marginLeft = String(x) + "px";
  targetBox.style.marginTop = String(y) + "px";
  console.log(x);
});


