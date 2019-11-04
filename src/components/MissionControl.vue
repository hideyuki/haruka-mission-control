<template>
    <v-container fluid grey lighten-5 class="mct-contaienr">
        <div>
            <PowerManagement/>
            <Sensors/>
        </div>
        <div>
            <Map/>
        </div>
        <div>
            <Lidar/>
            <OutputLog/>
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
      return {}
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
    .mct-contaienr {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: calc(50vh - 56px) calc(50vh - 56px);
    }
</style>
