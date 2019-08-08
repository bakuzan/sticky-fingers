<template>
  <div class="square"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Square extends Vue {}
</script>


<style scoped lang="scss">
.square {
  border: 1px solid;
}
</style>
