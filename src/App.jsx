import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';
import History from './components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const { winner, winningSquares } = calculateWinner(gamingBoard.squares);

  const squareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
      // Return exits the function
    }

    // setSquares(currentSquare => {
    //   return currentSquare.map((squareValue, pos) => {
    //     if (clickedPosition === pos) {
    //       return isXNext ? 'X' : 'O';
    //     }
    //     return squareValue;
    //   });
    // });

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];
      const nextSquareState = lastGamingState.squares.map(
        (squareValue, pos) => {
          if (clickedPosition === pos) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    // setIsXNext(currentIsXNext => !currentIsXNext);
    // setIsXNext returns negation of currentIsXNext value True or False

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        squareClick={squareClick}
        winningSquares={winningSquares}
      />
      <button
        className={`btn-reset ${winner ? 'active' : ''} `}
        type="button"
        onClick={onNewGameStart}
      >
        Start New Game
      </button>
      <h3>Game History</h3>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
