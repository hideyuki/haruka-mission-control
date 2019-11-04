<script>
  import {Line} from 'vue-chartjs'
  import 'chartjs-plugin-streaming'

  export default {
    extends: Line,

    props: {
      yMin: {
        type: Number,
        default: 0
      },
      yMax: {
        type: Number,
        default: 10
      }
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
              display: false,
              type:    'realtime'
            }],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: this.yMin,
                  max: this.yMax,
                  fontSize: 8
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
          data: []
        }]
      }, this.options)
    }
  }
</script>
