let gameBoardModule = (() => {
  let gameBoard = ['','','','','','','','',''];

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

  let x = true;
  let togglePlayer = () => x = !x;
  

  let playerAddMarks = (index) => {

        if (x === true) {
          gameBoard[index] = 'X' ;
          togglePlayer();
          render();
        }

        else {
          
          gameBoard[index] = 'O';
          togglePlayer();
          render();
        }
        
    
  };

  let avoidSameSquare = () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
      item.addEventListener('click', function (e) {
        if(gameBoard[index] === 'X' || gameBoard[index] === 'O' ) {
        }
        else {
          playerAddMarks(index)
          checkWinner()
        }
        });
    })
  }

  let checkWinner = function() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    const winnerText = document.querySelector('.winnerText')
    let draw = true;

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
        winnerText.textContent = `Winner is Player ${gameBoard[a]}!`;
        draw = false;
        break;
      }
     
    }

    if (!gameBoard.includes('') && draw===true) {
      winnerText.textContent = `Its a Draw. Yawn`;
    }
    

    }
  
  
 
  return {avoidSameSquare,gameBoard};
 })();

 

  gameBoardModule.avoidSameSquare()




let displayControllerModule = (function() {
  let testIf = () => console.log('Testing private function call');
  return {testIf}
})();

 let createPlayer = (name, number, shape) => { 
  return {
    name,
    number,
    shape,
  }
 }



//  let Justin = createPlayer('Justin', 1 , 'X')
//  let BecBec = createPlayer('BecBec', 2 , 'O')

//  console.log(Justin.number)