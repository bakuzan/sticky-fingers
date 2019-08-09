
<template>
  <button :type="type" :class="classes"><slot></slot></button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ type: String, default: 'button' }) public type!: string;
  @Prop({ type: Boolean, default: false }) public primary!: boolean;

  get classes() {
    return `button ${this.primary ? 'button--primary' : ''}`;
  }
}
</script>

<style scoped lang="scss">
.button {
  background: none;
  padding: 4px 8px;
  border: none;
  box-shadow: 1px 1px 2px 0px var(--shadow-colour),
    0px 0px 1px 0px var(--shadow-colour);
  cursor: pointer;

  &:not([disabled]):hover {
    background: var(--secondary-colour);
  }

  &--primary {
    background: var(--button-background);
    color: var(--button-colour);

    &:not([disabled]):hover {
      background: var(--button-background-hover);
    }
  }

  [disabled] {
    background: var(--disabled-colour);
    cursor: default;
  }
}
</style>
