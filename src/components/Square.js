import React from "react";
import { Button } from "@mui/material";

const Square = ({ value, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        width: "100px",
        height: "100px",
        fontSize: "24px",
        fontWeight: "bold",
        color: value === "X" ? "#3f51b5" : "#f50057",
        border: "2px solid",
        "&:hover": {
          backgroundColor: "rgba(63, 81, 181, 0.1)",
        },
      }}
    >
      {value}
    </Button>
  );
};

export default Square;
