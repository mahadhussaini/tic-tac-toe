import React, { useState } from "react";
import { Typography, Button, Paper, Container } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isTie, setIsTie] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (index) => {
    if (winner || board[index] || isTie) return;

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const win = calculateWinner(newBoard);
    if (win) {
      setWinner(win);
      setIsTie(false);
    } else if (newBoard.every((square) => square !== null)) {
      setIsTie(true);
    } else {
      setIsTie(false);
    }
  };

  const calculateWinner = (board) => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setIsTie(false);
  };

  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          padding: isMobile ? 2 : 4,
          marginTop: isMobile ? 2 : 4,
          textAlign: "center",
        }}
      >
        <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
          Tic-Tac-Toe
        </Typography>
        <Board board={board} onClick={handleClick} isMobile={isMobile} />
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          sx={{
            mt: 2,
            color: winner
              ? winner === "X"
                ? "red"
                : "blue"
              : isTie
              ? "black"
              : xIsNext
              ? "red"
              : "blue",
          }}
        >
          {winner
            ? `Winner: ${winner}`
            : isTie
            ? "It's a Tie"
            : `Next player: ${xIsNext ? "X" : "O"}`}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={resetGame}
          sx={{ mt: 2 }}
        >
          Restart Game
        </Button>
      </Paper>
    </Container>
  );
};

export default Game;
