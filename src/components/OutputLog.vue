<template>
    <div class="log">
        <h4>Output Log</h4>

        <div v-for="(log, index) in logs.slice().reverse()" :key="index">
            {{ log }}
        </div>
    </div>
</template>

<script>
  export default {
    props: ['logs'],

    data () {
      return {}
    },

    components: {}
  }
</script>

<style lang="scss" scoped>
    .log {
        color: #666666;
        font-size: 13px;
        width: 100%;
        margin: 50px 5px 5px 5px;
    }
</style>
