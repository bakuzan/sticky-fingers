<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/floatLabel.scss';

:root {
  --font-family: 'Lucida Console', 'Courier New', monospace;
  --font-size: 16px;

  --success-colour: #228b22;
  --warning-colour: #eee8aa;
  --danger-colour: #db7093;
  --disabled-colour: #bbbbbb;
  --disabled-contrast: #1f1f1f;

  --primary-colour: #2854bd;
  --primary-contrast: #fff;

  --secondary-colour: #d1d1d1;
  --secondary-contrast: #000;

  --button-background: var(--primary-colour);
  --button-background-hover: hsl(222, 65%, 40%);
  --button-colour: #fff;

  --shadow-colour: var(--secondary-colour);
  --multiselect-menu-background-colour: #fff;

  --header-height: 50px;
  --square-size: 50px;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

body,
input,
button {
  font-size: var(--font-size);
  font-family: var(--font-family);
}

main {
  padding: 5px;
  min-height: calc(100vh - 10px - var(--header-height));
}

// Page helpers
.page {
}

// Link styles
a {
  color: var(--secondary-colour);

  &.router-link-exact-active {
    text-decoration: none;
    color: inherit;
  }
}
</style>
