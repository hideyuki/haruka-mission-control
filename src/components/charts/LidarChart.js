import {Radar, mixins} from 'vue-chartjs'

const {reactiveData} = mixins

const SAMPLES = 92  // 920

export default {
  extends: Radar,
  mixins:  [reactiveData],
  props:   {
    lidarData: {
      type:    Array,
      default: []
    }
  },

  data () {
    const labels = []
    for (let i = 0; i < SAMPLES; i++) {
      labels.push('')
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
            display: false
          },
          ticks:      {
            min:         0,
            max:         40,
            beginAtZero: true
          }
        }
      }
    }
  },

  computed: {
    data () {
      return {
        labels:   this.labels,
        datasets: [{
          pointRadius:          1.5,
          pointBorderColor:     '#00000000',
          backgroundColor:      '#00000000',
          borderColor:          '#00000000',
          pointBackgroundColor: '#FF0000',
          data:                 this.lidarData
        }]
      }
    }
  },

  mounted () {
    this.chartData = this.data
    this.options = this.chartOptions
  },

  watch: {
    data: function () {
      this.chartData = this.data
    }
  }
}
