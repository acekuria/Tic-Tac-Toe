let playerChoice = (() => {
 let optionX = document.querySelector('.pickX');
 let optionO = document.querySelector('.pickO');
 let shape = 'X';
 let name = 'Player X';

 optionX.addEventListener('click', function (e) {
    name = 'Player X';
    shape = 'X';
  })

  optionO.addEventListener('click', function (e) {
    name = 'Player O';
    shape = 'O';

  })
  return {
    name, shape
  }
})();


let createPlayer = (name, shape) => { 

  let togglePlayerShape = () => {
    return shape === 'X' ? 'O' : 'X';
  };
 
  let togglePlayerName = () => {
    return name === 'Player X' ? 'Player O' : 'Player X';
  };

  return {
    name,
    shape,
    togglePlayerShape,
    togglePlayerName
  
 }}
 

let gameBoardModule = (() => {
  let gameBoard = ['','','','','','','','',''];
  let gameOver = false;

  let render = () => {
    const gridContent = document.querySelectorAll('.grid-content');
    gridContent.forEach((sqaure, index) => {
      sqaure.textContent = gameBoard[index];

      if (gameBoard[index] === 'X') {
        sqaure.classList.add('x');
        sqaure.classList.remove('o');
      }
      else {
        sqaure.classList.add('o');
        sqaure.classList.remove('x');
      }
    });
  };
  const winnerText = document.querySelector('.winnerText');

  let currentPlayer = createPlayer(playerChoice.name, playerChoice.shape);

  let playerAddMarks = (index) => {

    if (gameOver) return;
     
    if (gameBoard[index] !== '') return; 
          
    gameBoard[index] = currentPlayer.shape;

    render();
    checkWinner();

    currentPlayer = createPlayer(currentPlayer.togglePlayerName(), currentPlayer.togglePlayerShape());

        
  };
  

  let checkWinner = function() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    let draw = true;
    winnerText.textContent = `${currentPlayer.name}'s Turn `

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
        winnerText.textContent = `Winner is Player ${gameBoard[a]}!`;
        draw = false;
        gameOver = true;
        break;
      }
     
    }

    if (!gameBoard.includes('') && draw===true) {
      winnerText.textContent = `Its a Draw. Yawn`;
      gameOver = true;
    }
    }

    let avoidSameSquare = () => {
      const gridItems = document.querySelectorAll('.grid-item');
      gridItems.forEach((item, index) => {
        item.addEventListener('click', function (e) {
          if(gameBoard[index] === 'X' || gameBoard[index] === 'O' ) {
            return;
          }
          else {
            playerAddMarks(index);
            checkWinner();
            restart();
          }
          });
      });
    };

    let restart = () => {
      let restartButton = document.querySelector('.restart');
      restartButton.addEventListener('click', function (e) {
        gameBoard = ['','','','','','','','',''];
        gameOver = false;
        render();
        winnerText.textContent = 'Player X\'s Turn';

      });
    };
  return {avoidSameSquare};
 })();

 

  gameBoardModule.avoidSameSquare();

