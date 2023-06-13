let gameBoardModule = (() => {
  let gameBoard = [];
  return {};
 })();

let displayControllerModule = (function() {
  let testIf = () => console.log('Testing private function call');
  return {testIf}
})();

displayControllerModule.testIf()



 let createPlayer = (name, number, shape) => { 
  return {
    name,
    number,
    shape,
  }
 }

 let Justin = createPlayer('Justin', 1 , 'X')
 let BecBec = createPlayer('BecBec', 2 , 'O')

 console.log(Justin.number)