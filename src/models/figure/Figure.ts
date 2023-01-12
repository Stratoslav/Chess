import { Cell } from "./../Cell";
import { Collor } from "./../Collor";
import logo from "../../assets/black-king.png";

console.log(logo);
export enum FigureNames {
  FIGURE = "Фігура",
  KING = "король",
  KNIGHT = "кінь",
  PAWN = "пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон",
}
export class Figure {
  color: Collor;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number | string;

  constructor(color: Collor, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }
  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureNames.KING) return false;
    return true;
  }
  moveFigure(target: Cell) {}
}
