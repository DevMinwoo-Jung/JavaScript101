const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');
let inputValue = document.querySelector('.input__box');
const newP = 

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
   console.log(inputValue.value);
    inputValue.value = '';
  };
  
});

addButton.addEventListener('click', () => {
  console.log(inputValue.value);
  let newP = document.createElement("p");
  let newContent = document.createTextNode(inputValue.value);
  let currentP = document.querySelector('.item__list p');
  console.log(currentP);
  console.log(newP.appendChild(newContent));
  
  inputValue = '';
});

