const levelTwoHeight = document.querySelector('.levelTwo--div').getBoundingClientRect().y;
const levelThreeHeight = document.querySelector('.levelThree--div').getBoundingClientRect().y;
const nextLevelBtn = document.querySelector('.nextLevelBtn');


goNextLevel();

function goNextLevel(){
  nextLevelBtn.addEventListener('click', () => {
    alert("눌린당");
    scrollTo(0, levelTwoHeight);
  })

}