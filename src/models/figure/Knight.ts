import { Cell } from "./../Cell";
import { Collor } from "./../Collor";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "../../assets/black-knight.png";
import logoWhite from "../../assets/white-knight.png";
export class Knigth extends Figure {
  constructor(color: Collor, cell: Cell) {
    super(color, cell);
    this.logo = color === Collor.BLACK ? logoBlack : logoWhite;
    this.name = FigureNames.KNIGHT;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}
