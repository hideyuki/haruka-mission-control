<template>
    <div>
        <LidarAngleChart class="angle-chart"/>
        <LidarChart :lidarData="lidarData" class="chart"/>
    </div>
</template>

<script>
  import LidarChart from '@/components/charts/LidarChart.js'
  import LidarAngleChart from '@/components/charts/LidarAngleChart.js'

  const SAMPLES = 92  // 920

  export default {
    props: ['sensorData'],

    data () {
      const data = []
      for (let i = 0; i < SAMPLES; i++) {
        data.push(0)
      }

      return {
        lidarData: data
      }
    },

    watch: {
      sensorData (val) {
        if (val.lidars && val.lidars.length === SAMPLES) {
          //this.lidarData = val.lidars
          this.lidarData = val.lidars.map((l) => {
            return l / 10
          })
        }
      }
    },

    components: {
      LidarChart,
      LidarAngleChart
    }
  }
</script>

<style lang="scss" scoped>
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
