<template>
  <div class="multi-select">
    <div class="multi-select__display display has-float-label">
      <input
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :value="displayValue"
        type="text"
        autocomplete="off"
        class="display__input"
        tabindex="0"
        readonly
        @click="handleToggleOpen"
        @keydown="handleToggleOpen"
      />
      <label :for="id">{{ label }}</label>
    </div>
    <div
      v-skf-outside-click="handleToggleClose"
      v-if="isOpen"
      :class="dropdownClasses"
    >
      <ul class="multi-select__list">
        <li>
          <Tickbox
            :name="selectAllName"
            :checked="hasAllSelected"
            text="Select All"
            @change="handleSelectAll"
          />
        </li>
        <li class="multi-select__separator" />
        <li v-for="(op, i) in options" :key="op.value">
          <Tickbox
            :name="getName(i)"
            :text="op.text"
            :checked="values.includes(op.value)"
            @change="handleOptionChange"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Tickbox from '@/components/Tickbox.vue';
import OutsideClick from '@/directives/OutisdeClick';
import { OPEN_KEYS } from '@/enums/KeyCodes';
import { TickboxUpdate } from '@/interfaces/TickboxUpdate';
import {
  MultiSelectOption,
  MultiSelectValue
} from '@/interfaces/MultiSelectOption';
import cx from '@/utils/classes';

const EXTRACT_OPTION_INDEX = /^.*-/g;
const OPTION_PREFIX = 'option-';
const ALL_SELECTED_TEXT = 'All Selected';

@Component({
  components: {
    Tickbox
  },
  directives: {
    OutsideClick
  }
})
export default class MultiSelect extends Vue {
  get dropdownClasses() {
    return cx(
      'multi-select__dropdown-container',
      this.isOpen && 'multi-select__dropdown-container--is-open',
      this.listClassName
    );
  }

  get displayValue() {
    const length = this.values.length;
    if (!length) {
      return '';
    }

    if (length === this.options.length) {
      return ALL_SELECTED_TEXT;
    }

    if (length === 1) {
      const op = this.options.find((x) => this.values.includes(x.value));
      if (!op) {
        // Appeasement
        return '';
      }

      return op.text;
    }

    return `${length} selected`;
  }

  get hasAllSelected() {
    return this.values.length === this.options.length;
  }
  @Prop({ type: String }) public id!: string;
  @Prop({ type: String, default: undefined }) public name: string | undefined;
  @Prop({ type: String, default: 'MultiSelect' }) public label!: string;
  @Prop({ type: String, default: 'None selected' }) public placeholder!: string;
  @Prop({ type: Array, default: () => [] }) public values!: MultiSelectValue[];
  @Prop({ type: Array, default: () => [] })
  public options!: MultiSelectOption[];
  @Prop({ type: Boolean, default: false }) public disabled!: boolean;
  @Prop({ type: String, default: '' }) public listClassName!: string;
  private selectAllName: string = `${this.id}--selectAll`;
  private isOpen: boolean = false;

  public getName(i: number) {
    return `${this.id}--${OPTION_PREFIX}${i}`;
  }

  public handleToggleOpen(e: Event) {
    if (this.disabled) {
      return;
    }

    if (e.type !== 'click') {
      const ec = e as KeyboardEvent;
      const keys = OPEN_KEYS as string[];
      const isWatchedKey = !keys.includes(ec.code);

      if (!isWatchedKey) {
        return;
      }
    }

    e.stopPropagation();
    this.isOpen = true;
  }

  public handleToggleClose() {
    this.isOpen = false;
  }

  public handleOptionChange(update: TickboxUpdate) {
    const { name = '' } = update;
    const index = Number(name.replace(EXTRACT_OPTION_INDEX, ''));
    const option = this.options.find((x, i) => i === index);

    if (!option) {
      // Appeasement
      return;
    }

    const valuesSet = new Set([...this.values]);
    const hasValue = valuesSet.has(option.value);

    if (hasValue) {
      valuesSet.delete(option.value);
      this.$emit('update', [...valuesSet.values()], this.name);
    } else {
      valuesSet.add(option.value);
      this.$emit('update', [...valuesSet.values()], this.name);
    }
  }

  public handleSelectAll() {
    const values = new Set([...this.values]);
    const options = new Set([...this.options.map((op) => op.value)]);
    const hasAllSelected = values.size === options.size;
    const newValues = hasAllSelected ? [] : [...options.values()];

    this.$emit('update', newValues, this.name);
  }

  private removeOutsideClick: () => void = () => null;
}
</script>

<style lang="scss" scoped>
@import '../styles/_extensions';

$full-size-minus-padding: calc(100% - 10px);

.multi-select {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100px;
  min-height: 25px;
  border: none;

  &__display {
    padding: 5px;
    min-height: 35px;
    margin-bottom: -3px; // dont know why it doesnt line up
    box-sizing: content-box;
    cursor: pointer;

    &::after {
      @extend %down-caret-rhs;
    }
  }

  &__list {
    padding: 5px;
    margin: 5px 0;
    width: 100%;
    list-style-type: none;
    z-index: 10;
  }

  &__separator {
    height: 1px;
    border-bottom: 1px solid;
    opacity: 0.2;
  }

  &__dropdown-container {
    display: none;
    position: absolute;
    top: $full-size-minus-padding;
    width: $full-size-minus-padding;
    background-color: var(--multiselect-menu-background-colour);
    z-index: 10;
    @extend %standard-shadow;

    &--is-open {
      display: flex;
    }
  }
}

.display__input {
  display: flex;
  flex: 1 0 100%;
  color: inherit;
  box-sizing: border-box;
  cursor: pointer;
}
</style>