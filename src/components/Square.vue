<template>
  <div :class="classes">
    <input
      class="square__input"
      type="number"
      min="1"
      max="9"
      :value="data"
      @input="onUserInput"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

import getBorderClasses from '@/utils/getBorderClasses';

@Component
export default class Square extends Vue {
  @Prop({ type: String }) public name!: string;
  @Prop({ type: String }) public data!: string;

  get classes() {
    return `square ${getBorderClasses(this.name)}`;
  }

  @Emit()
  public onUserInput(event: KeyboardEvent) {
    const { value } = event.target as HTMLInputElement;
    return { square: this.name, value };
  }
}
</script>


<style scoped lang="scss">
$directions: (top, right, bottom, left);

.square {
  border: 1px solid var(--secondary-colour);

  &--border {
    @each $d in $directions {
      &_#{$d} {
        border-#{$d}-color: var(--primary-colour);
      }
    }
  }

  &--border-thick {
    @each $d in $directions {
      &_#{$d} {
        border-#{$d}-width: 2px;
      }
    }
  }

  &__input {
    --font-size: 20px;

    height: 100%;
    width: 100%;
    border: none;
    box-sizing: border-box;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
      margin: 0;
    }
  }
}
</style>
