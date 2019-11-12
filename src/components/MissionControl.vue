<template>
    <v-container fluid grey lighten-5 class="mct-container">
        <div>
            <PowerManagement :sensorData="sensorData"/>
        </div>
        <div>
            <Map/>
        </div>
        <div>
            <div class="lidar-output">
                <div class="lidar">
                    <Lidar :sensorData="sensorData"/>
                </div>
                <div class="output">
                    <OutputLog :logs="logs"/>
                </div>
            </div>
        </div>
        <div>
            <Streaming360Video/>
        </div>
    </v-container>
</template>

<script>
  import PowerManagement from '@/components/PowerManagement'
  import Map from '@/components/Map'
  import Streaming360Video from '@/components/Streaming360Video'
  import Lidar from '@/components/Lidar'
  import OutputLog from '@/components/OutputLog'

  const {ipcRenderer} = require('electron')

  export default {
    props: ['onChangeController'],

    data () {
      return {
        isConnectedGamepad: false,

        // inputs
        screwThrottle:  0.0,
        screwDirection: 0.0,

        // outputs
        logs: [],
        sensorData: null
      }
    },

    methods: {
      onConnectedGamepad (e) {
        this.isConnectedGamepad = true
        window.requestAnimationFrame(this.checkGamepad)
      },

      onDisconnectedGamepad (e) {
        this.isConnectedGamepad = false
      },

      checkGamepad () {
        if (!this.isConnectedGamepad) {
          return
        }

        const gamepads = navigator.getGamepads()
        if (gamepads.length > 0) {
          const gamepad = gamepads[0]

          if (gamepad) {
            // up-down of right analog stick is the throttle of the screw
            // up: -1, down: +1
            let upDown = -1 * gamepad.axes[3]
            if (upDown < 0) {
              upDown = 0
            }
            this.screwThrottle = upDown

            // left-right of left analog stick is the direction of the screw
            // left: -1, right: +1
            this.screwDirection = gamepad.axes[0]

            // console.log(this.screwThrottle, this.screwDirection)
            ipcRenderer.sendSync('usv-control', {
              throttle:  this.screwThrottle,
              direction: this.screwDirection
            })
          }
        }

        window.requestAnimationFrame(this.checkGamepad)
      },

      onReceiveUsvSensorData (event, arg) {
        console.log('onReceiveUsvSensorData', arg)
        arg.rollAngle = 12.2
        this.sensorData = arg
      }
    },

    mounted () {
      this.logs.push('test')
      this.logs.push('333')

      window.addEventListener('gamepadconnected', this.onConnectedGamepad)
      window.addEventListener('gamepaddisconnected', this.onDisconnectedGamepad)

      ipcRenderer.on('usv-sensor-data', this.onReceiveUsvSensorData)
    },

    destroyed: function () {
      window.removeEventListener('gamepadconnected', this.onConnectedGamepad)
      window.removeEventListener('gamepaddisconnected', this.onDisconnectedGamepad)

      ipcRenderer.off('usv-sensor-data', this.onReceiveUsvSensorData)
    },

    components: {
      PowerManagement,
      Map,
      Streaming360Video,
      Lidar,
      OutputLog
    }
  }
</script>

<style lang="scss" scoped>
    .mct-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: calc(50vh - 56px) calc(50vh - 56px);
    }

    .lidar-output {
        display: flex;

        .lidar {
            position: relative;
        }

        .output {
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 100%;
        }
    }
</style>
