import React, { Fragment, useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      style={{
        border: "5px solid",
        height: "100px",
        width: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isReset, setIsReset] = useState(false);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i] || isReset) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else if (isBoardFull(squares)) {
    status = "It's a draw! Guys, try again.";
  } else {
    status = 'Player: ' + (xIsNext ? 'X' : 'O') + ' please make a move.';
  }

  function isBoardFull(squares) {
    return squares.every((square) => square !== null);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setIsReset(true);
    setTimeout(() => {
      setIsReset(false);
    }, 0);
  }

  return (
    <Fragment>
      <div
        className="status"
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          marginTop: '120px',
          color: 'blue',
          fontSize: '40px',
        }}
      >
        {status}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={handleReset} className="Reset-Button">Play Again</button>
      </div>
    </Fragment>
  );
}
