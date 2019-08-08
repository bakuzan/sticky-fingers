<template>
  <div class="sudoku">
    <Square
      v-for="sq in board"
      :key="sq"
      :name="sq"
      :data="items[sq]"
      @on-user-input="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Square from '@/components/Square.vue';

import { BoardUpdate } from '@/interfaces/BoardUpdate';
import { UNITS } from '@/sudoku/consts';

@Component({
  components: {
    Square
  }
})
export default class Sudoku extends Vue {
  @Prop({ type: Object, default: () => ({}) }) public items!: object;

  private board: string[] = [];

  public mounted() {
    this.board = Object.keys(UNITS)
      .slice(0, 9)
      .reduce((p, k) => [...p, ...UNITS[k][0]], this.board);
  }

  @Emit()
  public onChange(update: BoardUpdate) {
    const newBoard = { ...this.items, [update.square]: update.value };

    return newBoard;
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