import { NestedSquareListMap, SquareListMap } from './interfaces/SquareList';
import permuations from './utils/permuations';

const chars = (str: string) => str.split('');

function generateUnitList(rows: string[], cols: string[]) {
  const list = [];

  for (const row of rows) {
    list.push(permuations(cols, [row]));
  }

  for (const col of cols) {
    list.push(permuations([col], rows));
  }

  const groupCols = ['ABC', 'DEF', 'GHI'];
  const groupRows = ['123', '456', '789'];

  for (const gCol of groupCols) {
    for (const gRow of groupRows) {
      list.push(permuations(chars(gCol), chars(gRow)));
    }
  }

  return list;
}

function generateUnitsAndPeers(squares: string[], unitlist: string[][]) {
  const us: NestedSquareListMap = {};
  const ps: SquareListMap = {};

  for (const square of squares) {
    const squarePeers: string[] = [];
    const squareUnits: string[][] = [];

    for (const unit of unitlist) {
      if (unit.some((x) => x === square)) {
        squareUnits.push(unit);

        for (const u of unit) {
          if (!squarePeers.some((x) => x === u) && u !== square) {
            squarePeers.push(u);
          }
        }
      }
    }

    us[square] = squareUnits;
    ps[square] = squarePeers;
  }

  return {
    UNITS: us,
    PEERS: ps
  };
}

export const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

export const DIGITS = '123456789';
export const SQUARES = permuations(COLS, ROWS);

export const UNITLIST = generateUnitList(ROWS, COLS);
export const { UNITS, PEERS } = generateUnitsAndPeers(SQUARES, UNITLIST);
