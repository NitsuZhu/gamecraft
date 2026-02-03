const mainContainer = document.querySelector('#gameboard-container');
const optionContainer = document.querySelector('.option-container');
const rotateButton = document.querySelector('#rotate-button');


let angle = 0;
function rotate (){
const optionShips = (Array.from(optionContainer.children));
if (angle === 0) {
    angle = 90;
} else {
    angle = 0;
}
optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`);
}


const width = 10;

function createBoard(color, user){
   const gameBoardContainer = document.createElement('div');
   gameBoardContainer.classList.add('game-board');
   gameBoardContainer.style.backgroundColor = color;
   gameBoardContainer.id = user;

   for(let i = 0; i < width * width; i++){
    const block = document.createElement('div')
    block.classList.add('block')
    block.id = i
    gameBoardContainer.append(block)
   }

   mainContainer.append(gameBoardContainer);
}

createBoard('blue');
createBoard('red');

rotateButton.addEventListener('click', rotate);

