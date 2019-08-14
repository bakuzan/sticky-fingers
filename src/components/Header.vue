<template>
  <nav class="skf-header">
    <h1 class="skf-header__title">Sticky Fingers</h1>
    <div class="skf-header__links">
      <router-link to="/">Home</router-link> |
      <router-link to="/history">History</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>


<style scoped lang="scss">
.skf-header {
  display: flex;
  justify-content: space-between;
  min-height: calc(var(--header-height) - 10px);
  background-color: var(--primary-colour);
  color: var(--primary-contrast);
  padding: 5px 15px;
  box-shadow: 1px 1px 2px 2px var(--shadow-colour);

  &__title {
    font-size: 1.5rem;
    margin: 8px 0;
  }

  &__links {
    display: flex;
    align-items: center;
  }
}
</style>
