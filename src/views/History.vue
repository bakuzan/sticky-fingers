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
      <li
        class="history__item"
        v-for="(item, index) in history"
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

import { GameResultView } from '@/interfaces/GameResult';
import GameTimer from '@/utils/GameTimer';
import { optsStore } from '@/utils/storage';
import formatDate from '@/utils/formatDate';
import padNumber from '@/utils/pad';
import averageForDifficulty from '@/utils/averageForDifficulty';
import { Difficulty } from '../sudoku/enums/Difficulty';

@Component({ components: { List } })
export default class History extends Vue {
  private history: GameResultView[] = [];
  private averages: any[] = [];

  public mounted() {
    const opts = optsStore.get();
    this.history = opts.history
      .sort((a, b) => b.datetime - a.datetime)
      .map((x) => ({
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
    // Handle different sorting
    // Filter by difficulty
  }

  public itemNumber(num: number): string {
    return `#${padNumber(num + 1, 3)}`;
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
    grid-template-columns: 50px 0.25fr 80px 0.25fr;
    padding: 5px 0;

    &--no-items {
      display: flex;
    }

    &:hover {
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
</style>