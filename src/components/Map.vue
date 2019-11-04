<template>
    <GmapMap
            :center="center"
            :zoom="15"
            :options="mapOptions"
            map-type-id="terrain"
            style="width: 100%; height: 100%">
        <!--<GmapMarker-->
        <!--:key="index"-->
        <!--v-for="(m, index) in markers"-->
        <!--:position="m"-->
        <!--:clickable="true"-->
        <!--:draggable="true"-->
        <!--@click="center=m"/>-->
        <!--<GmapPolyline-->
        <!--:draggable="false"-->
        <!--:editable="false"-->
        <!--:path="markers"-->
        <!--:options="{strokeColor:'#FF1000'}"/>-->
        <GmapCircle
                :key="index"
                v-for="(m, index) in markers"
                :center="m"
                :radius="30"
                :draggable="false"
                :editable="false"
                :clickable="true"
                :options="{strokeColor:'#00FF00', fillColor:'#00AA00',fillOpacity:1.0}"
                @click="center=m"/>

        <GmapMarker
        :position="center"
        :clickable="true"
        :draggable="true"
        :icon="icon"
        @click="center=m"/>
    </GmapMap>
</template>

<script>
  export default {
    data () {
      return {
        mapOptions: {
          mapTypeControl:    false,
          scaleControl:      true,
          streetViewControl: false,
          fullscreenControl: false
        },
        center:     {
          lat: 35.658026,
          lng: 139.805816
        },
        markers:    [
          {
            lat: 35.659771,
            lng: 139.803444
          },
          {
            lat: 35.657657,
            lng: 139.805202
          },
          {
            lat: 35.655309,
            lng: 139.807578
          },
          {
            lat: 35.659612,
            lng: 139.814331
          },
          {
            lat: 35.661139,
            lng: 139.814211
          },
          {
            lat: 35.660431,
            lng: 139.807527
          }
        ],
        icon: {
          path: 'M-256,0L256,-256L128,0l128,256L-256,0z',
          fillOpacity: .6,
          fillColor: '#FF0000',
          strokeWeight: 0,
          scale: .07,
          rotation: 50
        }
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
</style>
