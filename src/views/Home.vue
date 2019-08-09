<template>
  <div class="page home">
    <div class="home__content">
      <form
        id="gameForm"
        name="sudoku"
        autocomplete="off"
        novalidate=""
        @submit.prevent="onSubmit"
      >
        <Sudoku :items="grid" @on-change="handleBoardUpdate" />
        <div class="controls">
          <Button type="submit" primary>Check</Button>
          <div class="controls__message">
            <!-- TODO : Display user feedback -->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sudoku from '@/components/Sudoku.vue';
import Button from '@/components/Button.vue';

import { BoardUpdate } from '@/interfaces/BoardUpdate';
import { SudokuGrid } from '@/sudoku/interfaces/SudokuGrid';
import generate from '@/sudoku/generate';
import solve from '../sudoku/solve';
import getConflicts from '@/sudoku/getConflicts';
import { SQUARES } from '@/sudoku/consts';

@Component({
  components: { Sudoku, Button }
})
export default class Home extends Vue {
  private grid: SudokuGrid = {};
  private solution: SudokuGrid = {};

  public mounted() {
    const grid = generate();
    this.grid = grid;
    this.solution = solve({ ...grid });
  }

  public handleBoardUpdate(update: BoardUpdate) {
    this.$set(this.grid, update.square, update.value);
  }

  public onSubmit() {
    const solution = { ...this.solution };
    const currentGrid = { ...this.grid };
    console.log('solve?', currentGrid);

    const errors = getConflicts(currentGrid);
    console.log(solution);
    if (errors.length) {
      // TODO
      // Show erorrs
      // Check error fields vs solution to highlight the errors
      console.log('ERROS', errors);
      return;
    }

    const isSolved = Object.keys(solution).every(
      (k) => solution[k] === currentGrid[k]
    );

    if (isSolved) {
      // TODO
      // END GAME SUCCESS SCREEN
      console.log('SUCCESS');
    } else {
      // TODO
      // TELL USER
      const squaresLeft = SQUARES.filter((x) => !currentGrid[x]).length;
      console.log('NO CONFLICTS, NOT COMPLETE', squaresLeft);
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: calc(100vh - 10px - var(--header-height));

  &__content {
    margin: auto {
      top: 25px;
    }
  }
}

.controls {
  display: flex;
  padding: 5px 0;
}
</style>
