<template>
  <div class="page home">
    <div class="home__content">
      <Sudoku :items="grid" @on-change="handleBoardUpdate" />
      <div class="controls">
        <!-- TODO : Add game controls... think how to display error to user. -->
        <Button primary @on-click="onSubmit">Submit</Button>
      </div>
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
import isSolved from '@/sudoku/isSolved';
import getConflicts from '@/sudoku/getConflicts';

@Component({
  components: { Sudoku, Button }
})
export default class Home extends Vue {
  private grid: SudokuGrid = {};

  public mounted() {
    this.grid = generate();
  }

  public handleBoardUpdate(newBoard: SudokuGrid, update: BoardUpdate) {
    console.log('GAME?', newBoard, update);
    const num = Number(update.value);
    const isInvalid = isNaN(num) || num < 1 || num > 9;
    // TODO
    // if invalid show error or something

    // this.grid = { ...newBoard };
  }

  public onSubmit() {
    console.log('submit not implemented');
    const errors = getConflicts(this.grid);
    if (errors.length) {
      // TODO
      // Show erorrs
      console.log('ERROS', errors);
    }

    // TODO check if solved! (solve() === this.grid)
    if (false) {
      // TODO
      // END GAME SUCCESS SCREEN
      console.log('SUCCESS');
    } else {
      // TODO
      // TELL USER NO ERRORS... X SQUARES LEFT
      console.log('NO CONFLICTS, NOT COMPLETE');
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
