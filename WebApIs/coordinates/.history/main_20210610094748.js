const targetBox = document.querySelector('.box');
const target = document.addEventListener('mousemove', (e) => {
  let x = e.screenX / 10;
  let y = e.screenY / 10;
  targetBox.style.marginLeft = String(x) + "px";
  targetBox.style.marginRight = String(y) + "px";
  console.log(x);
});


