import { Cell } from "./../Cell";
import { Collor } from "./../Collor";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "../../assets/black-bishop.png";
import logoWhite from "../../assets/white-bishop.png";
export class Bishop extends Figure {
  constructor(color: Collor, cell: Cell) {
    super(color, cell);
    this.logo = color === Collor.BLACK ? logoBlack : logoWhite;
    this.name = FigureNames.BISHOP;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
