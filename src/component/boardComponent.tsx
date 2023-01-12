import { createPublicKey } from "crypto";
import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Players } from "../models/Players";
import { CellComponent } from "./cellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Players | null;
  swapPlayer: () => void;
}

export const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      updateBoard();
      swapPlayer();
    } else {
      if (cell.figure?.color === currentPlayer?.color) setSelectedCell(cell);
    }
  }

  useEffect(() => {
    higtLightCells();
  }, [selectedCell]);

  function higtLightCells() {
    board.highLoghtCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }
  return (
    <div>
      <h3>Curent Player {currentPlayer?.color}</h3>
      <div className="board">
        {board.cells.map((row, index) => {
          return (
            <Fragment key={index}>
              {row.map((cell) => {
                return (
                  <CellComponent
                    click={click}
                    cell={cell}
                    key={cell.id}
                    selected={
                      cell.y === selectedCell?.y && cell.x === selectedCell?.x
                    }
                  />
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
