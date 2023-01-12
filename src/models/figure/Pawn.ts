import { Cell } from "./../Cell";
import { Collor } from "./../Collor";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "../../assets/black-pawn.png";
import logoWhite from "../../assets/white-pawn.png";
export class Pawn extends Figure {
  isFirstStep: boolean = true;

  constructor(color: Collor, cell: Cell) {
    super(color, cell);
    this.color = color;
    this.cell = cell;
    this.logo = color === Collor.BLACK ? logoBlack : logoWhite;
    this.name = FigureNames.PAWN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const direction = this.cell.figure?.color === Collor.BLACK ? 1 : -1;
    const firstStepDirection =
      this.cell.figure?.color === Collor.BLACK ? 2 : -2;

    if (
      (target.y === this.cell.y + direction ||
        (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.getCell(target.x, target.y).isEmpty()
    ) {
      return true;
    }

    if (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }

    return false;
  }
  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
