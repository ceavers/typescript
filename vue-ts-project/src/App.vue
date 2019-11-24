<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,body{
  height: 100%;
  margin:0;
  padding: 0;
}
#app {
height: 100%;
  .home{
    text-align: center;
  }
}
</style>
