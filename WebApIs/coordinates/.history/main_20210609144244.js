const target = document.addEventListener('mousemove', (e) => {
  let x = e.screenX;
  let y = e.screenY;
  console.log( `${e.screenX}, ${e.screenY}`);
});

const topAndBottm = document