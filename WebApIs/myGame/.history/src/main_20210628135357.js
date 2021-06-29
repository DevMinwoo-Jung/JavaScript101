const levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
const levelThreeHeight = document.querySelector('.levelThree--div').getBoundingClientRect().y;
const goToLevelTwo = document.querySelector('.goToLvTwoBtn');
const goToLvThreeBtn = document.querySelector('.goToLvThreeBtn');



goNextLevel();

function goNextLevel(){
  goToLevelTwo.addEventListener('click', () => {
    scrollTo({top:levelTwoHeight, behavior: 'smooth'});
  });
  goToLvThreeBtn.addEventListener('click', () => {
    scrollTo({top:levelThreeHeight, behavior: 'smooth'});
  });
}