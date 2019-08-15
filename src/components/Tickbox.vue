<template>
  <div class="input-container input-container--checkbox">
    <label :class="tickboxClasses" :for="id">
      <input
        :id="id"
        :name="name"
        :checked="checked"
        :disabled="disabled"
        type="checkbox"
        class="tickbox__input"
        @change="change"
      />
      {{ text }}
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import cx from '@/utils/classes';

@Component
export default class Tickbox extends Vue {
  @Prop({ type: String }) public id!: string;
  @Prop({ type: String, default: undefined }) public name: string | undefined;
  @Prop({ type: String }) public text!: string;
  @Prop({ type: Boolean }) public checked!: boolean;
  @Prop({ type: Boolean, default: false }) public disabled!: boolean;
  @Prop({ type: String, default: '' }) public customTickbox!: string;

  get tickboxClasses() {
    return cx('tickbox', this.customTickbox);
  }

  @Emit()
  public change(event: Event) {
    const t = event.target as HTMLInputElement;
    return { checked: t.checked, name: this.name };
  }
}
</script>

<style lang="scss" scoped>
$min-checkbox-height: 30px;

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container--checkbox {
  display: flex;
  min-height: $min-checkbox-height;
  max-height: 45px;
  flex: 1;
}

.tickbox {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0 1;
  min-height: calc(#{$min-checkbox-height} - 4px);
  padding: 2px;
  padding-left: 25px;
  cursor: pointer;
}
// For some reason there is a random injected stylesheet overwriting this (?)
.tickbox__input.tickbox__input {
  /* For screenreader */
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: visible;
  padding: 0;
  position: absolute;
  top: 1px;
  left: 8px;
  width: 1px;
  -webkit-appearance: none;
  /* For screenreader */
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &:checked::before {
    color: #000;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 1;
  }
  &::before {
    content: '\2610';
    font-size: 2em;
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  &:disabled::before {
    content: '\274c';
    color: #666;
    cursor: default;
  }
  &:checked::before {
    content: '\2611';
    color: #0f0;
  }
}
</style>