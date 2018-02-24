<template>
  <div>
    <!--<app-server-status v-for="server in 3"></app-server-status>-->
    <app-server-status></app-server-status>
  </div>
</template>


<script>
  import ServerStatus from './ServerStatus.vue';

  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }
</script>

<style lang="scss" scoped>
  div {
    border: 0.5px solid lightblue;
  }
</style>
