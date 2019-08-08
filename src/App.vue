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
:root {
  --font-family: "Lucida Console", Consolas, monospace;
  --font-size: 16px;

  --success-colour: #228b22;
  --danger-colour: #b22222;
  --disabled-colour: #bbbbbb;

  --primary-colour: #2853bb;
  --primary-contrast: #fff;

  --secondary-colour: #a8a8a8;
  --secondary-contrast: #000;

  --header-height: 50px;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

body,
button {
  font-family: var(--font-family);
  font-size: var(--font-size);
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
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: var(--secondary-colour);
  }
}
</style>
