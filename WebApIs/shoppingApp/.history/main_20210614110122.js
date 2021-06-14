const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
    console.log(inputBox);
  }
  
});

addButton.addEventListener('click', () => {
  console.log('작동 잘함');
});

