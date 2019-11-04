<template>
    <v-container fluid grey lighten-5 class="mct-container">
        <div>
            <PowerManagement/>
            <Sensors/>
        </div>
        <div>
            <Map/>
        </div>
        <div>
            <div class="lidar-output">
                <div class="lidar">
                    <Lidar/>
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
  import Sensors from '@/components/Sensors'
  import OutputLog from '@/components/OutputLog'

  export default {
    data () {
      return {
        logs: []
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
      Sensors,
      OutputLog
    }
  }
</script>

<style lang="scss">
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
