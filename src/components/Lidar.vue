<template>
    <div>
        <LidarAngleChart class="angle-chart"/>
        <LidarChart :lidarData="lidarData" class="chart"/>
    </div>
</template>

<script>
  import LidarChart from '@/components/charts/LidarChart.js'
  import LidarAngleChart from '@/components/charts/LidarAngleChart.js'

  const SAMPLES = 920

  export default {
    data () {
      const data = []
      for (let i = 0; i < SAMPLES; i++) {
        data.push(10)
      }

      return {
        lidarData: data
      }
    },

    computed: {
    },

    mounted () {
      // setInterval(() => {
      //   const d = Number.parseInt(Math.random() * 40)
      //   const data = []
      //   for (let i = 0; i < SAMPLES; i++) {
      //     this.$set(this.lidarData, i, d)
      //   }
      //   console.log(this.lidarData)
      // }, 1000)
    },

    components: {
      LidarChart,
      LidarAngleChart
    }
  }
</script>

<style lang="scss">
    .angle-chart {
        position: absolute;
        height: 300px;
        min-height: 300px;
        width: 300px;
    }

    .chart {
        position: relative;
        height: 300px;
        min-height: 300px;
        width: 300px;
    }
</style>
