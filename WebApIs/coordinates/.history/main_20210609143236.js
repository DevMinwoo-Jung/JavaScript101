const target = document.addEventListener('mousemove', (e) => {
  console.log( `${e.screenX}, ${e.screenY}`);
  console.log( `${e.clientX}, ${e.clientY}`);
  
});