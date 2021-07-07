<template>
    <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
  @import url('./css/reset.css');
  @import url('https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap');
  @import "./css/_variables.scss";

  #app {
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    background-color: $white;
    color: $black;
  }
</style>
