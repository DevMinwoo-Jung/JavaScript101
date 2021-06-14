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
  newIcon.setAttribute('class', 'fas fa-trash');
  const currentP = document.querySelector('.item__list');
  currentP.appendChild(newP);
  newP.textContent = inputValue.value;
  currentP.appendChild(newIcon);
  inputValue.value = '';
};