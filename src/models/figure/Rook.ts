import { Cell } from "./../Cell";
import { Collor } from "./../Collor";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "../../assets/black-rook.png";
import logoWhite from "../../assets/white-rook.png";
export class Rook extends Figure {
  constructor(color: Collor, cell: Cell) {
    super(color, cell);

    this.logo = color === Collor.BLACK ? logoBlack : logoWhite;
    this.name = FigureNames.ROOK;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }
}
