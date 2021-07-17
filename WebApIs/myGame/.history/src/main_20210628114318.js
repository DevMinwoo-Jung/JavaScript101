const levelTwoHeight = document.querySelector('.levelTwo').getBoundingClientRect().y;
const levelThreeHeight = document.querySelector('.levelThree').getBoundingClientRect().y;
const goToLevelTwo = document.querySelector('.goToLvTwoBtn');
const goToLvThreeBtn = document.querySelector('.goToLvThreeBtn');



goNextLevel();

function goNextLevel(){
  goToLevelTwo.addEventListener('click', () => {
    alert("눌린당");
    scrollTo(0, levelTwoHeight);
  })
  goToLvThreeBtn.addEventListener('click', () => {
    alert("눌린당");
    scrollTo(0, levelThreeHeight);
  })
}