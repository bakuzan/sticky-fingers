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
    <List>
      <li v-if="!history.length" class="history__item history__item--no-items">
        No history found.
      </li>
      <li v-else class="history__item history__item--header">
        <div class="column-header">#</div>
        <div class="column-header">
          <Button
            class="column-header__button"
            @click.native="handleSort('datetime')"
            >Date<span
              v-if="sortField === 'datetime'"
              class="column-header__icon"
              >{{ sortIcon }}</span
            ></Button
          >
        </div>
        <div class="column-header">Difficulty</div>
        <div class="column-header">
          <Button
            class="column-header__button"
            @click.native="handleSort('timeElapsed')"
            >Time<span
              v-if="sortField === 'timeElapsed'"
              class="column-header__icon"
              >{{ sortIcon }}</span
            ></Button
          >
        </div>
      </li>
      <li
        class="history__item"
        v-for="(item, index) in items"
        :key="item.datetime"
      >
        <div>{{ itemNumber(index) }}</div>
        <div>{{ item.date }}</div>
        <div>{{ item.difficulty }}</div>
        <div>{{ item.timeElapsedDisplay }}</div>
      </li>
    </List>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import List from '@/components/List.vue';
import Button from '@/components/Button.vue';

import { GameResultView } from '@/interfaces/GameResult';
import GameTimer from '@/utils/GameTimer';
import { optsStore } from '@/utils/storage';
import formatDate from '@/utils/formatDate';
import padNumber from '@/utils/pad';
import averageForDifficulty from '@/utils/averageForDifficulty';
import { Difficulty } from '../sudoku/enums/Difficulty';

type ResultField = 'timeElapsed' | 'datetime';

@Component({ components: { List, Button } })
export default class History extends Vue {
  private sortOrder: number = 1;
  private sortField: ResultField = 'timeElapsed';
  private history: GameResultView[] = [];
  private averages: any[] = [];

  get items() {
    console.log('items');
    return this.history.sort((a, b) => {
      const bv = b[this.sortField];
      const av = a[this.sortField];

      return this.sortOrder === 1 ? av - bv : bv - av;
    });
  }

  get sortIcon() {
    return this.sortOrder === 1 ? '\u25B2\uFE0E' : '\u25BC\uFE0E';
  }

  public mounted() {
    const opts = optsStore.get();
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

    // TODO
    // Filter by difficulty
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

    console.log('sort', this.sortField, this.sortOrder);
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

  &__item {
    display: grid;
    grid-template-columns: 50px 0.33fr 110px 0.25fr;
    width: 100%;
    padding: 5px 0;

    @include respondToAll((xxs, xs)) {
      grid-template-columns: 50px 200px 110px auto;
    }

    &--no-items {
      display: flex;
    }

    &:not(.history__item--header):not(.history__item--no-items):hover {
      background-color: var(--secondary-colour);
    }
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
  display: flex;
  align-items: center;

  &__button {
    width: 100%;
    text-align: left;
    box-shadow: none;
  }

  &__icon {
    display: inline-block;
    margin: 0 5px;
  }
}
</style>