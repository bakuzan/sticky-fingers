<template>
  <div :class="classes">
    <input
      class="square__input"
      type="text"
      min="1"
      max="9"
      :id="name"
      :name="name"
      :aria-label="name"
      :value="value"
      @input="onUserInput"
      @keyup="onKeyUp"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

import getBorderClasses from '@/utils/getBorderClasses';

@Component
export default class Square extends Vue {
  @Prop({ type: String }) public name!: string;
  @Prop({ type: String }) public value!: string;

  get classes() {
    return `square ${getBorderClasses(this.name)}`;
  }

  @Emit()
  public onUserInput(event: KeyboardEvent) {
    const { value: rawValue } = event.target as HTMLInputElement;

    const num = Number(rawValue);
    const isInvalid = isNaN(num) || num < 1 || num > 9;
    const value = isInvalid ? '' : rawValue;

    return { square: this.name, value };
  }

  @Emit()
  public onKeyUp(event: KeyboardEvent) {
    // kick it up
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
