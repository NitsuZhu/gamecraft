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

rotateButton.addEventListener('click', rotate);


const width = 10;

function createBoard(color, user){
   const gameBoardContainer = document.createElement('div');
   gameBoardContainer.classList.add('game-board');
   gameBoardContainer.style.backgroundColor = color;
   gameBoardContainer.id = user;

   for(let i = 0; i < width * width; i++){
    const block = document.createElement('div');
    block.classList.add('block');
    block.id = i;
    gameBoardContainer.append(block);
   }

    mainContainer.append(gameBoardContainer);
}

createBoard('blue', 'player');
createBoard('red', 'computer');

class ship{
    constructor(name, length){
        this.name = name;
        this.length = length;
    }
}

const destroyer = new ship('destroyer' , 2);
const submarine = new ship('submarine' , 3);
const cruiser = new ship('cruiser' , 3);
const battleship = new ship('battleship' , 4);
const carrier = new ship('carrier' , 5);

const allShips = [destroyer, submarine, cruiser, battleship, carrier];

function addShipPiece(ship){
    const allBoardBlocks = document.querySelectorAll('#computer div');
    let randomBoolean = Math.random() < 0.5;
    let isHorizontal = randomBoolean;
    let randomStartIndex = Math.floor(Math.random() * width * width);

    let shipBlocks = [];

    for(let i = 0; i < ship.length; i++){
        if (isHorizontal){
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i]);
        }else{
            shipBlocks.push(allBoardBlocks[randomStartIndex + i * width]);
        }
    }

    shipBlocks.forEach(shipBlock => {
        shipBlock.classList.add(ship.name);
        shipBlock.classList.add('taken');
    })

}
allShips.forEach(ship => addShipPiece(ship));