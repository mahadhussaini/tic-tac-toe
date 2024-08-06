import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Game from "./components/Game";

const App = () => {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Game />
    </Container>
  );
};

export default App;
