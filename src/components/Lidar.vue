<template>
    <div>
        <LidarChart :chart-data="chartData" :options="chartOptions"/>
    </div>
</template>

<script>
  import LidarChart from '@/components/charts/LidarChart.js'

  const SAMPLES = 920

  export default {
    data () {
      return {
        chartOptions: {
          responsive:   true,
          animation:    false,
          showTooltips: false,
          legend:       {
            display: false
          },
          scale:        {
            angleLines: {
              display: false
            },
            ticks:      {
              suggestedMin: 0,
              suggestedMax: 40
            }
          }
        }
      }
    },

    computed:   {
      chartData () {
        const data = []
        const labels = []
        for (let i = 0; i < SAMPLES; i++) {
          data.push(20)
          labels.push('')
        }

        console.log(data)

        return {
          labels:   labels,
          datasets: [{
            label:                "運動量",
            backgroundColor:      '#00000000',
            borderColor:          '#FF0000',
            pointBackgroundColor: '#FF0000',
            data:                 data
          }]
        }
      }
    },
    components: {
      LidarChart
    }
  }
</script>

<style lang="scss">
</style>
