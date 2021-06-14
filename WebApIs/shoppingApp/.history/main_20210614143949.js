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
{/* <i class="fas fa-trash"></i> */}
/// functions
function addPara(){
  const newP = document.createElement('p');
  const newIcon = document.createElement('i');
  const currentP = document.querySelector('.item__list');

  newIcon.setAttribute('class', 'fas fa-trash');

  currentP.appendChild(newP);
  newP.textContent = inputValue.value;
  const addingP = document.querySelector('.item__list p');
  console.log(addingP);
  addingP.appendChild(newIcon);
  inputValue.value = '';
};