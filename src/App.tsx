import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useStore } from "react-redux";
import "./App.scss";
import { BoardComponent } from "./component/boardComponent";
import { LostFigres } from "./component/lostFigures";
import { Timer } from "./component/Timer";
import { Board } from "./models/Board";
import { Collor } from "./models/Collor";
import { Players } from "./models/Players";
const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Players(Collor.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Players(Collor.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Players | null>(null);
  useEffect(() => {
    setCurrentPlayer(whitePlayer);
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCels();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Collor.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className="app">
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <LostFigres title="Black figures" figures={board.lostBlackFigure} />
      <LostFigres figures={board.lostWhiteFigure} title="White figures" />
    </div>
  );
};

export default App;
