import React from "react";
import { Box } from "@mui/material";
import Square from "./Square";

const Board = ({ board, onClick, isMobile }) => {
  const renderSquare = (i) => (
    <Square value={board[i]} onClick={() => onClick(i)} />
  );

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(3, 100px)",
        gap: 0.5,
        border: "1px solid #ccc",
      }}
    >
      {board.map((_, i) => (
        <Box
          key={i}
          sx={{
            border: "1px solid #ccc",
            width: isMobile ? "auto" : 100,
            height: 100,
          }}
        >
          {renderSquare(i)}
        </Box>
      ))}
    </Box>
  );
};

export default Board;
