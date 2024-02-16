// id board
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ModeSelect from "../../components/ModeSelect";
import AppBar from "../../components/AppBar";
import BoardBar from ".";
import BoardContent from "./BoardContent";
function Board() {
  return (
    <Container disableGutters="true" maxWidth="false" sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}

export default Board;
