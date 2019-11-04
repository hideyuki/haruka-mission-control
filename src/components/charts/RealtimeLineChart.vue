<script>
  import {Line} from 'vue-chartjs'
  import 'chartjs-plugin-streaming'

  export default {
    extends: Line,

    props: {
      yMin: {
        type:    Number,
        default: 0
      },
      yMax: {
        type:    Number,
        default: 10
      },
      value: {
        type:    Number,
        default: 3
      },
      borderColor: {
        type: String,
        default: 'rgb(54, 162, 235)'
      },
      backgroundColor: {
        type: String,
        default: 'rgba(54, 162, 235, 0.5)'
      },
    },

    computed: {
      options () {
        return {
          responsive:          true,
          maintainAspectRatio: false,

          legend: {
            display: false
          },

          scales: {
            xAxes: [{
              display:  false,
              type:     'realtime',
              realtime: {
                duration: 6000,
                delay:    2000,
                onRefresh: (chart) => {
                  chart.data.datasets[0].data.push({
                    x: Date.now(),
                    y: this.value ? this.value : 0
                  })
                }
              }
            }],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min:         this.yMin,
                  max:         this.yMax,
                  fontSize:    8
                }
              }
            ]
          }
        }
      }
    },

    mounted () {
      this.renderChart({
        datasets: [{
          data: [],
          borderWidth: 2,
          pointBorderWidth: 0,
          pointBorderColor: 'transparent',
          pointRadius: 0,
          borderColor: this.borderColor,
          backgroundColor: this.backgroundColor
        }]
      }, this.options)
    }
  }
</script>
