<template>
  <div class="counters">
    <div
      v-for="item in counters"
      :key="item.number"
      :class="item.classes"
      :aria-label="`${item.number} has ${item.count} placements`"
      @mouseenter="() => highlight(item.number)"
      @mouseleave="() => highlight(-1)"
    >
      <div class="counter__number" aria-hidden="true">{{item.number}}</div>
      <div class="counter__count" aria-hidden="true">{{item.count}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

import { SudokuGrid } from '@/sudoku/interfaces/SudokuGrid';
import cx from '@/utils/classes';

@Component
export default class Counters extends Vue {
  @Prop({ type: Object, default: () => ({}) }) public items!: SudokuGrid;

  get counters() {
    const values = Object.values(this.items);
    return Array(9)
      .fill(null)
      .map((_, i) => {
        const num = i + 1;
        const count = values.filter((x) => Number(x) === num).length;

        return {
          number: num,
          count,
          classes: cx('counter', count === 9 && 'counter--complete')
        };
      });
  }

  @Emit()
  public highlight(num: number) {
    // Kick up
  }
}
</script>


<style scoped lang="scss">
@import '../styles/_mixins.scss';

.counters {
  display: flex;
  flex-direction: column;
  width: var(--square-size);

  @include respondToAll((xxs, xs)) {
    flex-direction: row;
    width: 100%;
  }
}

.counter {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--square-size);
  width: var(--square-size);
  border: 1px solid var(--secondary-colour);
  box-sizing: border-box;
  cursor: pointer;

  &--complete {
    background-color: var(--secondary-colour);
  }

  &:hover {
    background-color: var(--primary-colour);
    color: var(--primary-contrast);
  }

  &__number {
    font-size: 1.25rem;
  }

  &__count {
    position: absolute;
    bottom: 2px;
    right: 2px;
    font-size: 0.9rem;
  }
}
</style>
