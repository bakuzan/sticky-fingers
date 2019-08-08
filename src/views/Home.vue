<template>
  <div class="page home">
    <div class="home__centered">
      <Sudoku :items="grid" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sudoku from '@/components/Sudoku.vue';

@Component({
  components: { Sudoku }
})
export default class Home extends Vue {
  private grid: any[] = [];

  public mounted() {
    this.grid = [];
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: calc(100vh - 10px - var(--header-height));

  &__centered {
    margin: auto;
  }
}
</style>
