import React, { useState } from "react";
import Square from "./Square";
import { Button, Typography, Box } from "@mui/material";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    if (state.every((square) => square !== null)) {
      return "Tie";
    }

    return false;
  };

  const result = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null || result) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <Box className="board-container">
      {result ? (
        <>
          {result === "Tie" ? (
            <Typography variant="h4">It's a tie!</Typography>
          ) : (
            <Typography variant="h4">{result} won the game</Typography>
          )}
          <Button variant="contained" onClick={handleReset}>
            Play Again
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h4">
            Player {isXTurn ? "X" : "O"} please move
          </Typography>
          <Box className="board-row">
            {[0, 1, 2].map((i) => (
              <Square key={i} onClick={() => handleClick(i)} value={state[i]} />
            ))}
          </Box>
          <Box className="board-row">
            {[3, 4, 5].map((i) => (
              <Square key={i} onClick={() => handleClick(i)} value={state[i]} />
            ))}
          </Box>
          <Box className="board-row">
            {[6, 7, 8].map((i) => (
              <Square key={i} onClick={() => handleClick(i)} value={state[i]} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Board;
