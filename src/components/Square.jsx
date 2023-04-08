const Square = ({ value, onClick, isWinningSquares }) => {
  // String interpolation to be used for STYLING
  // className={`square ${value === 'O' ? 'text-green' : 'text-orange'} ${
  //   isWinningSquares ? 'winning' : ''
  // }`}

  const colorClassName = value === 'O' ? 'text-green' : 'text-orange';
  const winnerClassName = isWinningSquares ? 'winning' : '';

  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winnerClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
