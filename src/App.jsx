import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const squareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
      // Return exits the function
    }

    setSquares(currentSquare => {
      return currentSquare.map((squareValue, pos) => {
        if (clickedPosition === pos) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
    // setIsXNext returns negation of currentIsXNext value True or False
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} squareClick={squareClick} />
    </div>
  );
}

export default App;
