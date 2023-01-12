import { Cell } from "./../Cell";
import { Collor } from "./../Collor";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "../../assets/black-queen.png";
import logoWhite from "../../assets/white-queen.png";
export class Queen extends Figure {
  constructor(color: Collor, cell: Cell) {
    super(color, cell);

    this.logo = color === Collor.BLACK ? logoBlack : logoWhite;
    this.name = FigureNames.QUEEN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
