import {Radar} from 'vue-chartjs'

export default {
  extends: Radar,

  data () {
    const labels = []
    const data = []
    for (let i = 0; i < 12; i++) {
      labels.push(('   ' + i * 30).slice(-3))
      data.push(30)
    }
    return {
      labels:       labels,
      chartOptions: {
        responsive:          true,
        animation:           false,
        maintainAspectRatio: true,
        showTooltips:        false,

        legend: {
          display: false
        },

        scale: {
          angleLines: {
            display: true,
            color:   '#00000030'
          },
          gridLines:  {
            display: false
          },
          ticks:      {
            min:         0,
            max:         40,
            beginAtZero: true,
            fontColor: 'transparent'
          }
        }
      },
      chartData:    {
        labels:   labels,
        datasets: []
      }
    }
  },

  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
