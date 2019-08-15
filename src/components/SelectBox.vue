<template>
  <div :class="selectClasses">
    <select
      v-if="options.length"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      class="select-box__input"
      @change="onSelect"
    >
      <option
        v-if="isRequiredWithNoValue"
        :value="null"
        class="select-box__option"
        >Please select a {{ text }}</option
      >
      <option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        class="select-box__option"
        >{{ item.text }}</option
      >
    </select>
    <label :for="id">{{ text }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

import { SelectOptions } from '@/interfaces/SelectOptions';
import cx from '@/utils/classes';

@Component
export default class SelectBox extends Vue {
  @Prop({ type: String }) public id!: string;
  @Prop({ type: String, default: undefined }) public name!: string;
  @Prop({ type: String, default: '' }) public text!: string;
  @Prop({ type: [String, Number], default: undefined }) public value!: string;
  @Prop({ type: Array, default: () => [] }) public options!: SelectOptions[];
  @Prop({ type: Boolean, default: false }) public required!: boolean;
  @Prop({ type: Boolean, default: false }) public disabled!: boolean;

  get selectClasses() {
    return cx('select-box', 'has-float-label');
  }

  get isRequiredWithNoValue() {
    return this.required && !this.value;
  }

  @Emit()
  public onSelect(event: Event) {
    const t = event.target as HTMLSelectElement;
    return { value: t.value, name: this.name };
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_extensions';

.select-box {
  flex: 1;
  padding: 5px;
  max-height: 35px;
  box-sizing: content-box;

  &::after {
    @extend %down-caret-rhs;
  }

  &__input {
    width: 100%;
    background-color: inherit;
    color: inherit;
  }

  &__option {
    background-color: inherit;
    color: inherit;
  }
}
</style>