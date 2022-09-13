<template>
  <div :class="classes">
    <input
      :class="inputClasses"
      :type="fieldType"
      maxlength="1"
      :tabIndex="name === 'A1' ? 0 : -1"
      :id="name"
      :name="fieldName"
      :aria-label="name"
      :readonly="disabled"
      :value="value"
      @input="onUserInput"
      @keyup="onKeyUp"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

import cx from '@/utils/classes';
import getBorderClasses from '@/utils/getBorderClasses';
import focusService from '@/utils/FocusService';
import isMobile from '@/utils/isMobile';

@Component
export default class Square extends Vue {
  @Prop({ type: String }) public name!: string;
  @Prop({ type: String }) public value!: string;
  @Prop({ type: Boolean }) public disabled!: boolean;
  @Prop({ type: Boolean }) public warning!: boolean;
  @Prop({ type: Boolean }) public error!: boolean;
  @Prop({ type: Boolean }) public highlight!: boolean;

  get classes() {
    return cx('square', ...getBorderClasses(this.name));
  }

  get inputClasses() {
    const hasWarning = this.warning && !this.error;
    const hasError = this.error;
    const hasHighlight = this.highlight;

    return cx(
      'square__input',
      hasHighlight && `square__input--highlight`,
      hasWarning && `square__input--warning`,
      hasError && `square__input--error`
    );
  }

  get fieldName() {
    return `sq_${this.name}`;
  }

  get fieldType() {
    return isMobile() ? 'number' : 'text';
  }

  public onFocus() {
    focusService.setFocus(this.name);
  }

  public onBlur() {
    focusService.setFocus(undefined);
  }

  @Emit()
  public onUserInput(event: KeyboardEvent) {
    const { value: rawValue } = event.target as HTMLInputElement;

    const num = Number(rawValue);
    const isInvalid = isNaN(num) || num < 1 || num > 9;
    const value = isInvalid ? '' : rawValue;

    this.$forceUpdate(); // required to force the re-render so the ui looks like the backing data
    return { square: this.name, value };
  }

  @Emit()
  public onKeyUp(event: KeyboardEvent) {
    // kick it up
  }
}
</script>

<style scoped lang="scss">
@import '../styles/_mixins.scss';

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
    height: 100%;
    width: 100%;
    border: none;
    box-sizing: border-box;
    text-align: center;

    --font-size: 20px; // Default

    @include respondTo(lg) {
      --font-size: 28px;
    }

    @include respondTo(md) {
      --font-size: 24px;
    }

    @include respondTo(sm) {
      --font-size: 20px;
    }

    @include respondTo(xs) {
      --font-size: 20px;
    }

    @include respondTo(xxs) {
      --font-size: 20px;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
      margin: 0;
    }

    &--warning {
      background-color: var(--warning-colour);
    }

    &--error {
      background-color: var(--danger-colour);
    }

    &:read-only,
    &[read-only] {
      background-color: var(--disabled-colour);
      color: var(--disabled-contrast);
    }

    // Yes, dirty - but not !important
    &--highlight,
    &:read-only#{&}--highlight,
    &[read-only]#{&}--highlight {
      background-color: var(--primary-colour);
      color: var(--primary-contrast);
    }
  }
}
</style>
