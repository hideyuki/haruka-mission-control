<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span style="margin-right: 10px">Haruka</span>
                <span class="font-weight-light">Mission Control</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-content>
            <MissionControl onChangeController="onChangeController"/>
        </v-content>
    </v-app>
</template>

<script>
  import MissionControl from '@/components/MissionControl';

  export default {
    methods: {
      onChangeController (throttle, direction) {
        console.log(throttle, direction)
      }
    },

    components: {
      MissionControl,
    }
  };
</script>
