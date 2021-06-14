const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');

inputBox.addEventListener('keydown', (e) => {
  console.log(e);
});

addButton.addEventListener('click', () => {
  console.log('작동 잘함');
});

