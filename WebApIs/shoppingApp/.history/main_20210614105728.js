const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');

inputBox.addEventListener('keyup', (e) => {
  let result =+ e;
  if(e.key == 'Enter'){
    console.log(result);
  }
  
});

addButton.addEventListener('click', () => {
  console.log('작동 잘함');
});

