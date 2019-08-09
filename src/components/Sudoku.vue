<template>
  <div class="sudoku">
    <Square
      v-for="sq in board"
      :key="sq"
      :name="sq"
      :value="items[sq] || ''"
      @on-user-input="onChange"
      @on-key-up="onKeyUp"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Square from '@/components/Square.vue';

import { BoardUpdate } from '@/interfaces/BoardUpdate';
import { UNITS, ROWS, COLS } from '@/sudoku/consts';
import getBoardSquares from '@/utils/getBoardSquares';

interface FocusAdjustment {
  direction: number;
  list: string[];
  value: string;
  idBase: string;
}

@Component({
  components: {
    Square
  }
})
export default class Sudoku extends Vue {
  @Prop({ type: Object, default: () => ({}) }) public items!: object;

  private board: string[] = [];

  public mounted() {
    this.board = getBoardSquares();
  }

  @Emit()
  public onChange(update: BoardUpdate) {
    // Let the value be kicked up
    console.log('sudoku?', update);
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
    const [letter, num] = value.split('');
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
}
</script>


<style scoped lang="scss">
.sudoku {
  display: grid;
  grid-auto-rows: var(--square-size);
  grid-template-columns: repeat(9, var(--square-size));
}
</style>
