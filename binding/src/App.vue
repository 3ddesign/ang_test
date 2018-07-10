<template>
  <app-quote>
    <h2>{{ quoteTitle }}</h2>
    <p>A wonderful Quote</p>
  </app-quote>
</template>

<script>
  import Quote from './components/Quote.vue'

  export default {
    data: function () {
      return {
        quoteTitle: 'The Quote'
      }
    },
    components: {
      appQuote: Quote
    }
  }
</script>
<style lang="scss">
</style>
