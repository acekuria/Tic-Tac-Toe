let gameBoardModule = (() => {
  let gameBoard = ['','','','','','','','',''];

  let render = () => {
    const gridContent = document.querySelectorAll('.grid-content');
    gridContent.forEach((sqaure, index) => {
      sqaure.textContent = gameBoard[index];
      if (sqaure.textContent === 'X') {
        sqaure.classList.add('x');
      }
      else {
        sqaure.classList.add('o');
      }
    });
  };

  let x = true;
  let togglePlayer = () => x = !x;
  

  let playerAddMarks = () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
      item.addEventListener('click', function (e) {
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
        })
    })
    
  };

  return {playerAddMarks, gameBoard};
 })();


  gameBoardModule.playerAddMarks()

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