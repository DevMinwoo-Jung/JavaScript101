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
  addPara();
  // console.log(inputValue.value);
  // console.log(currentP);
  // console.log(newP.appendChild(newContent));
  // currentP.insertBefore(newP, currentP);
  
});

/// functions
function addPara(){
  let newP = document.createElement("p");
  let newContent = document.createTextNode(inputValue.value);
  let currentP = document.querySelector('.item__list p');
  newP.appendChild(newContent);
  currentP.parentNode.insertBefore(newP, currentP.nextSibling);
  inputValue.value = '';
};