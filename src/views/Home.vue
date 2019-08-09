<template>
  <div class="page home">
    <div class="home__content">
      <div v-if="complete">
        <div>You've completed the puzzle!</div>
        <div class="controls">
          <Button primary @click.native="onNewGame">New game</Button>
        </div>
      </div>
      <form
        v-else
        id="gameForm"
        name="sudoku"
        autocomplete="off"
        novalidate=""
        @submit.prevent="onSubmit"
      >
        <Sudoku
          :initial-grid="initialGrid"
          :items="grid"
          :errors="errors"
          @on-change="handleBoardUpdate"
        />
        <div class="controls">
          <Button type="submit" primary>Check</Button>
          <div class="controls__message">
            {{ userFeedback }}
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
import { SudokuError } from '@/sudoku/interfaces/SudokuError';
import generate from '@/sudoku/generate';
import solve from '../sudoku/solve';
import getConflicts from '@/sudoku/getConflicts';
import { SQUARES } from '@/sudoku/consts';

@Component({
  components: { Sudoku, Button }
})
export default class Home extends Vue {
  private initialGrid: SudokuGrid = {};
  private grid: SudokuGrid = {};
  private solution: SudokuGrid = {};

  private complete: boolean = false;
  private userFeedback: string = '';
  private errors: SudokuError[] = [];

  public mounted() {
    /**
     * TODO
     * 1) Game timer
     * 2) Track number of checks
     * 3) Limit number of checks (option ?)
     * 4) Time limit (option ?)
     *
     */
    this.onNewGame();
  }

  public handleBoardUpdate(update: BoardUpdate) {
    this.$set(this.grid, update.square, update.value);
    // TEMP FOR SUCCESS DEV
    // this.grid = this.solution;
  }

  public onNewGame() {
    const grid = generate();

    this.initialGrid = { ...grid };
    this.grid = { ...grid };
    this.solution = solve({ ...grid });
    this.complete = false;
  }

  public onSubmit() {
    const solution = { ...this.solution };
    const currentGrid = { ...this.grid };
    console.log('solve?', currentGrid);
    console.log('solution?', solution);
    const { errors, mistakes } = getConflicts(solution, currentGrid);
    const mistakeCount = mistakes.length;

    // Mistakes that break sudoku rules.
    if (errors.length) {
      this.errors = [...errors];
      this.userFeedback = `You've broken the rules!`;
      return;
    }

    this.errors = [];

    // Mistakes that don't break sudoku rules, but are incorrect to the solution
    if (mistakeCount) {
      const plu = mistakeCount !== 1 ? 's' : '';
      this.userFeedback = `There appear to be ${mistakeCount} mistake${plu}.`;
      return;
    }

    const isSolved = Object.keys(solution).every(
      (k) => solution[k] === currentGrid[k]
    );

    if (isSolved) {
      this.userFeedback = '';
      this.complete = true;
    } else {
      const squaresLeft = SQUARES.filter((x) => !currentGrid[x]).length;
      this.userFeedback = `No conflicts found. ${squaresLeft} squares left.`;
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

  &__message {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0 5px;
  }
}
</style>
