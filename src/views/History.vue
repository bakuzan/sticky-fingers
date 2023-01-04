<template>
  <section class="page history">
    <header class="history__header">
      <h2 class="history__title">Game history</h2>
      <aside class="averages">
        <h3 class="averages__title">Average time elapsed</h3>
        <div class="averages__item" v-for="avg in averages" :key="avg.text">
          <div>{{ avg.text }}</div>
          <div>{{ avg.value }}</div>
        </div>
      </aside>
    </header>
    <div class="history__filters">
      <MultiSelect
        id="difficultyFilter"
        name="difficultyFilter"
        label="Difficulty"
        :values="difficulties"
        :options="difficultyOptions"
        @update="onDifficultyUpdate"
      />
    </div>
    <p class="history__count">
      Showing {{ items.length }} of {{ history.length }}
    </p>
    <table class="list">
      <thead>
        <tr class="history__item history__item--header">
          <th class="column-header">#</th>
          <th class="column-header">
            <Button
              class="column-header__button"
              @click.native="handleSort('datetime')"
            >
              Date
              <span
                v-if="sortField === 'datetime'"
                class="column-header__icon"
                >{{ sortIcon }}</span
              >
            </Button>
          </th>
          <th class="column-header">Difficulty</th>
          <th class="column-header">
            <Button
              class="column-header__button"
              @click.native="handleSort('timeElapsed')"
            >
              Time
              <span
                v-if="sortField === 'timeElapsed'"
                class="column-header__icon"
                >{{ sortIcon }}</span
              >
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="history__item"
          v-for="(item, index) in items"
          :key="item.datetime"
        >
          <td column-title="Rank">{{ itemNumber(index) }}</td>
          <td column-title="Date">{{ item.date }}</td>
          <td column-title="Difficulty">{{ item.difficulty }}</td>
          <td column-title="Time">
            {{ item.timeElapsedDisplay }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import formatDate from 'ayaka/formatDateTimeForDisplay';
import padNumber from 'ayaka/padNumber';
import { Component, Vue } from 'vue-property-decorator';

import List from '@/components/List.vue';
import Button from '@/components/Button.vue';
import MultiSelect from '@/components/MultiSelect.vue';

import { GameResultView } from '@/interfaces/GameResult';
import {
  MultiSelectValue,
  MultiSelectOption
} from '@/interfaces/MultiSelectOption';
import GameTimer from '@/utils/GameTimer';
import { optsStore } from '@/utils/storage';
import averageForDifficulty from '@/utils/averageForDifficulty';
import { Difficulty } from '@/sudoku/enums/Difficulty';

type ResultField = 'timeElapsed' | 'datetime';

const DIFFICULTY_OPTIONS: MultiSelectOption[] = Object.values(Difficulty).map(
  (value) => ({
    value,
    text: value
  })
);

@Component({ components: { List, Button, MultiSelect } })
export default class History extends Vue {
  private sortOrder: number = 1;
  private sortField: ResultField = 'timeElapsed';
  private difficulties: Difficulty[] = [];
  private history: GameResultView[] = [];
  private averages: any[] = [];

  get items() {
    return this.history
      .filter((x) => this.difficulties.includes(x.difficulty))
      .sort((a, b) => {
        const bv = b[this.sortField];
        const av = a[this.sortField];

        return this.sortOrder === 1 ? av - bv : bv - av;
      });
  }

  get sortIcon() {
    return this.sortOrder === 1 ? '\u25B2\uFE0E' : '\u25BC\uFE0E';
  }

  get difficultyOptions() {
    return DIFFICULTY_OPTIONS;
  }

  public mounted() {
    const opts = optsStore.get();
    this.difficulties = [opts.difficulty];
    this.history = opts.history.map((x) => ({
      ...x,
      date: formatDate(x.datetime),
      timeElapsedDisplay: GameTimer.formatTime(x.timeElapsed)
    }));

    this.averages = [
      averageForDifficulty(Difficulty.easy, this.history),
      averageForDifficulty(Difficulty.medium, this.history),
      averageForDifficulty(Difficulty.hard, this.history)
    ];
  }

  public itemNumber(num: number): string {
    return `#${padNumber(num + 1, 3)}`;
  }

  public handleSort(field: ResultField) {
    const toggle = this.sortField === field;

    if (toggle) {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    }

    this.sortField = field;
  }

  public onDifficultyUpdate(values: MultiSelectValue[]) {
    this.difficulties = values as Difficulty[];
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

.history {
  padding: 5px;

  &__header {
    display: flex;
    justify-content: space-between;

    @include respondTo(xxs) {
      flex-direction: column;
    }
  }

  &__title {
    font-size: 1.25rem;
    margin: 15px 0;
  }

  &__filters {
    max-width: 50%;
    margin: 10px 0;
  }

  &__count {
    font-size: 0.8rem;
    margin: 5px 0;
  }

  &__item {
    padding: 5px 0;
  }
}

.averages {
  display: grid;
  background-color: var(--secondary-colour);
  padding: 5px;

  &__title {
    font-size: 1.1rem;
    margin: 5px 0;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
  }
}

.column-header {
  &__button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: none;
    padding: 0 5px;
    border: none;
    text-align: left;
    cursor: pointer;
    box-shadow: none;
  }

  &__icon {
    display: inline-block;
    margin: 0 5px;
  }
}

/* Repsonsive */
td,
th {
  vertical-align: top;
}

td {
  padding: 5px;
}

@media only screen and (max-width: 600px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid var(--table-border-colour);
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid var(--table-cell-border-colour);
    position: relative;
    padding-left: 40%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    // top: 6px;
    left: 6px;
    width: 35%;
    padding-right: 10px;
    white-space: nowrap;
    text-align: right;
  }

  /* Label the data */
  td:before {
    content: attr(column-title);
  }

  td[column-title='Rank'] {
    background-color: var(--secondary-colour);
    color: var(--secondary-contrast);
  }
}
</style>
