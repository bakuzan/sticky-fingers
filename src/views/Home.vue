<template>
  <div class="page home">
    <div class="home__content">
      <div v-if="!inGame" class="game-summary">
        <div class="game-summary__message">{{ userFeedback }}</div>
        <div class="controls">
          <Button primary @click.native="onNewGame">New game</Button>
          <div style="margin: 0 15px">
            <SelectBox
              id="difficulty"
              class="game-summary__difficulty"
              text="Difficulty"
              :value="difficulty"
              :options="difficultyOptions"
              @on-select="onDifficultySelection"
              required
            />
          </div>
        </div>
      </div>
      <form
        v-else
        id="gameForm"
        name="sudoku"
        autocomplete="off"
        novalidate
        @submit.prevent="onSubmit"
      >
        <div class="orientation">
          <div class="orientation__inner">
            <div class="controls">
              <div class="controls__padded">{{ timeElapsed }}</div>
              <div class="controls__padded">{{ difficulty }}</div>
            </div>

            <Sudoku
              :initial-grid="initialGrid"
              :items="grid"
              :highlightNumber="highlightNumber"
              :errors="errors"
              @on-change="handleBoardUpdate"
            />
          </div>
          <Counters
            :items="grid"
            @highlight="setHighlightNumber"
            @selected="onCounterSelect"
          />
        </div>
        <div class="controls">
          <Button type="submit" primary>Check</Button>
          <div class="controls__message">{{ userFeedback }}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sudoku from '@/components/Sudoku.vue';
import Button from '@/components/Button.vue';
import SelectBox from '@/components/SelectBox.vue';
import Counters from '@/components/Counters.vue';

import { BoardUpdate } from '@/interfaces/BoardUpdate';
import { SelectBoxChange } from '@/interfaces/SelectBoxChange';
import GameTimer from '@/utils/GameTimer';
import FocusService from '@/utils/FocusService';
import { optsStore } from '@/utils/storage';
import { SudokuGrid } from '@/sudoku/interfaces/SudokuGrid';
import { SudokuError } from '@/sudoku/interfaces/SudokuError';
import generate from '@/sudoku/generate';
import solve from '@/sudoku/solve';
import getConflicts from '@/sudoku/getConflicts';
import { SQUARES } from '@/sudoku/consts';
import { Difficulty } from '@/sudoku/enums/Difficulty';

@Component({
  components: { Sudoku, Button, SelectBox, Counters }
})
export default class Home extends Vue {
  private initialGrid: SudokuGrid = {};
  private grid: SudokuGrid = {};
  private solution: SudokuGrid = {};
  private difficulty: Difficulty = Difficulty.easy;

  private inGame: boolean = false;
  private timer: number = 0;
  private timeElapsed: string = '00m 00s';
  private userFeedback: string = `Let's play sudoku!`;
  private errors: SudokuError[] = [];
  private highlightNumber: number = -1;

  get difficultyOptions() {
    return Object.values(Difficulty).map((value) => ({
      value,
      text: value
    }));
  }

  public mounted() {
    const opts = optsStore.get();
    this.difficulty = opts.difficulty;
  }

  public onDifficultySelection(change: SelectBoxChange) {
    const { value } = change;
    const difficulty = value as Difficulty;
    this.difficulty = difficulty;
    optsStore.set({ difficulty });
  }

  public handleBoardUpdate(update: BoardUpdate) {
    this.$set(this.grid, update.square, update.value);
    // TEMP FOR SUCCESS DEV
    // this.grid = this.solution;
  }

  public onNewGame() {
    const grid = generate(this.difficulty);

    this.timeElapsed = '00m 00s';
    this.userFeedback = ``;
    this.initialGrid = { ...grid };
    this.grid = { ...grid };
    this.solution = solve({ ...grid });
    this.inGame = true;
    this.unsubTimer = GameTimer.subscribe((time) => (this.timeElapsed = time));
  }

  public setHighlightNumber(num: number) {
    this.highlightNumber = num;
  }

  public onCounterSelect(num: number) {
    const prevSquare = FocusService.getPreviousFocus();
    if (prevSquare === undefined) {
      return;
    }

    const initSquareValue = this.initialGrid[prevSquare];
    if (!initSquareValue) {
      // Only update the square if it isn't a pre-populated square.
      this.handleBoardUpdate({
        square: prevSquare,
        value: `${num}`
      });
    }

    this.$nextTick(() => document.getElementById(prevSquare)?.focus());
  }

  public onSubmit() {
    const solution = { ...this.solution };
    const currentGrid = { ...this.grid };

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
      this.completedGame();
    } else {
      const squaresLeft = SQUARES.filter((x) => !currentGrid[x]).length;
      this.userFeedback = `No conflicts found. ${squaresLeft} squares left.`;
    }
  }

  private completedGame() {
    const time = this.unsubTimer();
    this.userFeedback = `You've completed the puzzle!
      Completed in ${GameTimer.formatTime(time)}`;
    this.inGame = false;

    const opts = optsStore.get();
    optsStore.set({
      history: [
        ...opts.history,
        {
          datetime: new Date().getTime(),
          timeElapsed: time,
          difficulty: this.difficulty
        }
      ]
    });
  }

  private unsubTimer: () => number = () => 0;
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

.home {
  display: flex;
  height: calc(100vh - 10px - var(--header-height));

  &__content {
    margin: auto {
      top: 25px;
    }
  }
}

.game-summary {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__message {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 15px 0;
  }

  &__difficulty {
    min-width: 90px;
  }
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  &__message {
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0 10px;
  }

  &__padded {
    padding: 0 5px;
  }
}

.orientation {
  display: flex;
  align-items: flex-end;

  @include respondToAll((xxs, xs)) {
    flex-direction: column;
  }

  &__inner {
    display: flex;
    flex-direction: column;
  }
}
.counters {
  margin: 0 10px;

  @include respondToAll((xxs, xs)) {
    margin: 10px 0;
  }
}
</style>
