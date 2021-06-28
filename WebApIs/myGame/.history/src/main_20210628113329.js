const levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
const levelThreeHeight = document.querySelector('.levelThree--div').getBoundingClientRect().y;
const goToLevelTwo = document.querySelector('.goToLvTwoBtn');
const goToLevelTrhee = document.querySelector('.goToLvThreeBtn');



goNextLevel();

function goNextLevel(){
  goToLevelTwo.addEventListener('click', () => {
    alert("눌린당");
    scrollTo(0, levelTwoHeight);
  })
  goToLevelTwo.addEventListener('click', () => {
    alert("눌린당");
    scrollTo(0, levelThreeHeight);
  })
}