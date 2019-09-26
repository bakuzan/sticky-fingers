<template>
  <div class="sudoku">
    <Square
      v-for="item in board"
      :key="item.sq"
      v-bind="item"
      @on-user-input="onChange"
      @on-key-up="onKeyUp"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Square from '@/components/Square.vue';

import { BoardUpdate } from '@/interfaces/BoardUpdate';
import { FocusAdjustment } from '@/interfaces/FocusAdjustment';
import { SudokuError } from '@/sudoku/interfaces/SudokuError';
import { UNITS, ROWS, COLS } from '@/sudoku/consts';
import getBoardSquares from '@/utils/getBoardSquares';
import { SudokuGrid } from '../sudoku/interfaces/SudokuGrid';

const RAW_BOARD = getBoardSquares();

@Component({
  components: {
    Square
  }
})
export default class Sudoku extends Vue {
  @Prop({ type: Object, default: () => ({}) }) public initialGrid!: SudokuGrid;
  @Prop({ type: Object, default: () => ({}) }) public items!: SudokuGrid;
  @Prop({ type: Array }) public errors!: SudokuError[];
  @Prop({ type: Number }) public highlightNumber!: number;

  get board() {
    return RAW_BOARD.map((sq) => ({
      sq,
      name: sq,
      value: this.items[sq],
      disabled: !!this.initialGrid[sq],
      warning: this.isWarning(sq),
      error: this.isError(sq),
      highlight: Number(this.items[sq]) === this.highlightNumber
    }));
  }

  @Emit()
  public onChange(update: BoardUpdate) {
    // Let the value be kicked up
  }

  public onKeyUp(event: KeyboardEvent) {
    const { name } = event.target as HTMLInputElement;
    const value = event.code || event.key;
    const adjustment = this.getAdjustment(value, name);

    if (!adjustment.direction) {
      return;
    }

    const squareId = this.adjustTarget(adjustment);
    this.updateFocus(squareId);
  }

  private getAdjustment(key: string, value: string): FocusAdjustment {
    const [_, cell] = value.split('_');
    const [letter, num] = cell.split('');

    switch (key) {
      case 'ArrowUp':
        return {
          direction: -1,
          list: ROWS,
          value: num,
          idBase: `${letter}{new}`
        };
      case 'ArrowDown':
        return {
          direction: 1,
          list: ROWS,
          value: num,
          idBase: `${letter}{new}`
        };
      case 'ArrowLeft':
        return {
          direction: -1,
          list: COLS,
          value: letter,
          idBase: `{new}${num}`
        };
      case 'ArrowRight':
        return {
          direction: 1,
          list: COLS,
          value: letter,
          idBase: `{new}${num}`
        };
      default:
        return { direction: 0, list: [], value: '', idBase: '' };
    }
  }

  private adjustTarget(adjustment: FocusAdjustment) {
    const { list, value, direction, idBase } = adjustment;
    const lastIndex = list.length - 1;
    const index = list.findIndex((x) => x === value);

    let newIndex = index + direction;
    newIndex = newIndex < 0 ? lastIndex : newIndex;
    newIndex = newIndex > lastIndex ? 0 : newIndex;

    const newValue = list[newIndex];
    return idBase.replace('{new}', newValue);
  }

  private updateFocus(id: string) {
    const square = document.getElementById(id);
    if (square) {
      square.focus();
    }
  }

  private isWarning(square: string) {
    return this.errors.some((e) => e.unit.includes(square));
  }

  private isError(square: string) {
    return this.errors.some((e) => e.errorFields.includes(square));
  }
}
</script>


<style scoped lang="scss">
.sudoku {
  display: grid;
  grid-auto-rows: var(--square-size);
  grid-template-columns: repeat(9, var(--square-size));
}
</style>
