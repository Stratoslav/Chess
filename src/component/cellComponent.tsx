import React from "react";
import { FC } from "react";
import { Cell } from "../models/Cell";
interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}
export const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "cell__selected" : ""].join(
        " "
      )}
      style={{
        background: cell.available && cell.figure ? "rgb(197, 138, 71)" : "",
      }}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
};
