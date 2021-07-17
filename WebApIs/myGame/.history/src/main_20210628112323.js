const levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
const levelThreeHeight = document.querySelector('.levelThree--div').getBoundingClientRect().y;
const nextLevelBtn = document.querySelector('.nextLevelBtn');

function goNextLevel(){
  nextLevelBtn.addEventListener('click', () => {
    scrollTo(0, levelTwoHeight);
  })

}