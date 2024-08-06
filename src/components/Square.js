import React from "react";
import { Button } from "@mui/material";

const Square = ({ value, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "100%",
        height: "100%",
        fontSize: { xs: "1.5rem", sm: "2rem" },
        lineHeight: "100px",
        minWidth: 0,
        minHeight: 0,
        padding: 0,
        color: value === "X" ? "red" : "blue",
      }}
    >
      {value}
    </Button>
  );
};

export default Square;
