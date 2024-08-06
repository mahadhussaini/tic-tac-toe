import React from "react";
import { Grid } from "@mui/material";
import Square from "./Square";

const Board = ({ board, onClick }) => {
  const renderSquare = (index) => {
    return <Square value={board[index]} onClick={() => onClick(index)} />;
  };

  return (
    <Grid container spacing={1} justifyContent="center">
      {[0, 1, 2].map((row) => (
        <Grid key={row} container item justifyContent="center" spacing={1}>
          {renderSquare(row * 3)}
          {renderSquare(row * 3 + 1)}
          {renderSquare(row * 3 + 2)}
        </Grid>
      ))}
    </Grid>
  );
};

export default Board;
