import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const squareClick = clickedPosition => {
    if (squares[clickedPosition]) {
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
  };

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => squareClick(position)}
      ></Square>
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
