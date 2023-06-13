let gameBoardModule = (() => {
  let gameBoard = ['X','0','X','0','0','X','X','0','X'];

  let render = () => {
    const gridBoxes = document.querySelectorAll('.grid-content');
    gridBoxes.forEach((grid, index) => {
      grid.textContent = gameBoard[index];
      console.log('LOOP');
    });
  };

  return {render};
 })();

  gameBoardModule.render()

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