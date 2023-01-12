import { Cell } from "./../Cell";
import { Collor } from "./../Collor";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "../../assets/black-king.png";
import logoWhite from "../../assets/white-king.png";
export class King extends Figure {
  constructor(color: Collor, cell: Cell) {
    super(color, cell);
    this.logo = color === Collor.BLACK ? logoBlack : logoWhite;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (target.figure?.name === FigureNames.KING && target.figure?.color)
      console.log(target);
    if (!super.canMove(target)) return false;
    const isVerticalMove =
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) &&
      target.x === this.cell.x;
    const isHorizontalMove =
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      target.y === this.cell.y;
    const isLeftDiagonal =
      (target.x === this.cell.x + 1 && target.y === this.cell.y + 1) ||
      (target.x === this.cell.x - 1 && target.y === this.cell.y - 1);
    const isRightDiagonal =
      (target.x === this.cell.x + 1 && target.y === this.cell.y - 1) ||
      (target.x === this.cell.x - 1 && target.y === this.cell.y + 1);

    if (isVerticalMove || isHorizontalMove || isLeftDiagonal || isRightDiagonal)
      return true;

    return false;
  }
}
