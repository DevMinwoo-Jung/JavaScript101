const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');
let inputValue = document.querySelector('.input__box');

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
   addPara();
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
  const newP = document.createElement("p");
  let newContent = document.createTextNode(inputValue.value);
  let inputBox = document.querySelector('.input__box');

  const currentP = document.querySelector('.item__list');
  // newP.appendChild(newContent);
  // currentP.appendChild(newP.append(newContent));
  newP.textContent(newContent);
  currentP.insertBefore(newContent, inputBox);
  inputValue.value = '';
};