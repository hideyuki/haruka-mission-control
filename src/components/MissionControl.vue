<template>
    <v-container fluid grey lighten-5 class="mct-container">
        <div>
            <PowerManagement :batteryLevel="batteryLevel"
                             :pitchAngle="0"
                             :rollAngle="0"/>
        </div>
        <div>
            <Map/>
        </div>
        <div>
            <div class="lidar-output">
                <div class="lidar">
                    <Lidar :lidarData="lidarData"/>
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

  const SAMPLES = 920

  export default {
    data () {
      const data = []
      for (let i = 0; i < SAMPLES; i++) {
        data.push(10)
      }

      return {
        logs:          [],
        lidarData:     data,
        solarVoltages: [],
        batteryLevel:  50
      }
    },

    mounted () {
      this.logs.push('test')
      this.logs.push('333')
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
