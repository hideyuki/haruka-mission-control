<template>
    <div class="log">
        <div v-for="(log, index) in logs.reverse()" :key="index">
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

<style lang="scss">
    .log {
        color: #666666;
        font-size: 13px;
        width: 100%;
    }
</style>
