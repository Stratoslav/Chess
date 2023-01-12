import { Figure } from "./figure/Figure";
import { Rook } from "./figure/Rook";
import { Knigth } from "./figure/Knight";
import { Bishop } from "./figure/Bishop";
import { King } from "./figure/King";
import { Pawn } from "./figure/Pawn";
import { Queen } from "./figure/Queen";
import { Collor } from "./Collor";
import { Cell } from "./Cell";

export class Board {
  cells: Cell[][] = [];
  lostBlackFigure: Figure[] = [];
  lostWhiteFigure: Figure[] = [];

  public initCels() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Collor.BLACK, null));
        } else {
          row.push(new Cell(this, j, i, Collor.WHITE, null));
        }
      }
      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostWhiteFigure = this.lostWhiteFigure;
    newBoard.lostBlackFigure = this.lostBlackFigure;
    return newBoard;
  }
  public highLoghtCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }
  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }
  private addBishop() {
    new Bishop(Collor.BLACK, this.getCell(2, 0));
    new Bishop(Collor.BLACK, this.getCell(5, 0));
    new Bishop(Collor.WHITE, this.getCell(2, 7));
    new Bishop(Collor.WHITE, this.getCell(5, 7));
  }
  private addKing() {
    new King(Collor.BLACK, this.getCell(4, 0));
    new King(Collor.WHITE, this.getCell(4, 7));
  }
  private addKnight() {
    new Knigth(Collor.BLACK, this.getCell(1, 0));
    new Knigth(Collor.BLACK, this.getCell(6, 0));
    new Knigth(Collor.WHITE, this.getCell(1, 7));
    new Knigth(Collor.WHITE, this.getCell(6, 7));
  }
  private addRook() {
    new Rook(Collor.BLACK, this.getCell(0, 0));
    new Rook(Collor.BLACK, this.getCell(7, 0));
    new Rook(Collor.WHITE, this.getCell(0, 7));
    new Rook(Collor.WHITE, this.getCell(7, 7));
  }
  private addPawn() {
    for (let i = 0; i < 8; i += 1) {
      new Pawn(Collor.BLACK, this.getCell(i, 1));
      new Pawn(Collor.WHITE, this.getCell(i, 6));
    }
  }
  private addQueen() {
    new Queen(Collor.BLACK, this.getCell(3, 0));
    new Queen(Collor.WHITE, this.getCell(3, 7));
  }
  public addFigures() {
    this.addBishop();
    this.addKing();
    this.addKnight();
    this.addPawn();
    this.addQueen();
    this.addRook();
  }
}
