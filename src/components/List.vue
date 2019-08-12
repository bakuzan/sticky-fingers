<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  padding: 0;
  list-style-type: none;
}
</style>