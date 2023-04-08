const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((obj, index) => {
          return (
            <li key={index}>
              <button
                className={`button btn-move ${
                  currentMove === index ? 'active' : ''
                }`}
                type="button"
                onClick={() => moveTo(index)}
              >
                {index === 0 ? `Go to Game Start` : `Go to Move #${index}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default History;
