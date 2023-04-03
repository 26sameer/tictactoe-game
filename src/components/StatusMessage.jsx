const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-orange' : 'text-green'}>
            {winner}
          </span>
        </>
      );
    } else if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is{' '}
          <span className={isXNext ? 'text-orange' : 'text-green'}>
            {nextPlayer}
          </span>
        </>
      );
    } else if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">X</span> and{' '}
          <span className="text-green">O</span> Match Tied!
        </>
      );
    }
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
