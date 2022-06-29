import React from "react";
import Board from "./components/Board";
import "./Styles/Root.scss";
const app = () => {
  return (
    <div className="app">
      <h1>TIC TAC TOE GAME</h1>
      <Board />
    </div>
  );
};
export default app;
