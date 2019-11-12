<template>
    <div>
        <div class="chart-container">
            <div class="chart-title">Solar Panel (V)</div>
            <div class="chart-title">Lead Battery (V)</div>
            <div class="chart-title">Battery Level</div>
            <div class="chart-title">Power Source</div>
        </div>
        <div class="chart-container">
            <RealtimeLineChart class="chart" :value="solarVoltage"/>
            <RealtimeLineChart class="chart" :value="batteryVoltage"/>
            <div class="chart" :class="['battery-level', batteryLevelClass]">
                <span class="battery-level-number">{{ batteryLevel }}</span>
                <span class="battery-level-percent">%</span>
            </div>
            <div class="chart power-status">
                Battery
            </div>
        </div>
        <div class="chart-container" style="margin-top: 5px">
            <div class="chart-title">Solar Panel (A)</div>
            <div class="chart-title">Lead Battery (A)</div>
            <div class="chart-title">Motor (A)</div>
            <div class="chart-title">Circuit (A)</div>
        </div>
        <div class="chart-container">
            <RealtimeLineChart class="chart" :value="solarCurrent"/>
            <RealtimeLineChart class="chart" :value="batteryCurrent"/>
            <RealtimeLineChart class="chart" :value="motorCurrent"/>
            <RealtimeLineChart class="chart" :value="circuitCurrent" :yMax="3"/>
        </div>

        <div class="chart-container" style="margin-top: 10px">
            <div class="chart-title">Temperature (℃)</div>
            <div class="chart-title">Humidity (%)</div>
            <div class="chart-title">Pressure (hPa)</div>
            <div class="chart-title">Attitude</div>
        </div>
        <div class="chart-container">
            <RealtimeLineChart class="chart" :value="temperature" :yMax="40"/>
            <RealtimeLineChart class="chart" :value="humidity" :yMax="100"/>
            <RealtimeLineChart class="chart" :value="pressure" :yMax="1500"/>
            <div class="chart attitude-container">
                <div class="attitude-body">
                    <div class="pitch-roll" :style="{'transform': 'rotate(' + rollAngle + 'deg)'}">
                        <img :src="pitchImage" class="pitch-image" :style="{'transform': 'translateY(' + pitchAngle * 1.21 + 'px)'}">
                        <img :src="rollImage" class="roll-image">
                    </div>
                    <img :src="rollPitchZeroImage" class="roll-pitch-zero">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import RealtimeLineChart from './charts/RealtimeLineChart'
  import RollPitchZeroImage from '@/assets/roll-pitch-zero.png'
  import PitchImage from '@/assets/pitch.png'
  import RollImage from '@/assets/roll.png'

  export default {
    props: {
      sensorData: {
        type:    Object,
        default: null
      }
    },

    data () {
      return {
        solarVoltage: 0,
        solarCurrent: 0,
        batteryVoltage: 0,
        batteryCurrent: 0,
        batteryLevel: 0,
        motorCurrent: 0,
        circuitCurrent: 0,
        temperature: 0,
        humidity: 0,
        pressure: 0,
        rollAngle: 0,
        pitchAngle: 0,

        rollPitchZeroImage: RollPitchZeroImage,
        pitchImage:         PitchImage,
        rollImage:          RollImage
      }
    },

    computed: {
      batteryLevelClass () {
        if (this.batteryLevel < 20) {
          return 'low'
        } else {
          return 'normal'
        }
      }
    },

    watch: {
      sensorData (val) {
        if ('solarVoltage' in val) {
          this.solarVoltage = val.solarVoltage
        } else {
          this.solarVoltage = 0
        }
        if ('solarCurrent' in val) {
          this.solarCurrent = val.solarCurrent
        } else {
          this.solarCurrent = 0
        }
        if ('batteryVoltage' in val) {
          this.batteryVoltage = val.batteryVoltage
        } else {
          this.batteryVoltage = 0
        }
        if ('batteryCurrent' in val) {
          this.batteryCurrent = val.batteryCurrent
        } else {
          this.batteryCurrent = 0
        }
        if ('batteryLevel' in val) {
          this.batteryLevel = val.batteryLevel
        } else {
          this.batteryLevel = 0
        }

        if ('motorCurrent' in val) {
          this.motorCurrent = val.motorCurrent
        } else {
          this.motorCurrent = 0
        }
        if ('circuitCurrent' in val) {
          this.circuitCurrent = val.circuitCurrent
        } else {
          this.circuitCurrent = 0
        }

        if ('temperature' in val) {
          this.temperature = val.temperature
        } else {
          this.temperature = 0
        }
        if ('humidity' in val) {
          this.humidity = val.humidity
        } else {
          this.humidity = 0
        }
        if ('pressure' in val) {
          this.pressure = val.pressure
        } else {
          this.pressure = 0
        }

        if ('rollAngle' in val) {
          this.rollAngle = val.rollAngle
        } else {
          this.rollAngle = 0
        }
        if ('pitchAngle' in val) {
          this.pitchAngle = val.pitchAngle
        } else {
          this.pitchAngle = 0
        }
      }
    },

    components: {
      RealtimeLineChart
    }
  }
</script>

<style lang="scss" scoped>
    .chart-container {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        padding-right: 10px;
    }

    .chart-title {
        flex: auto;
        width: 100px;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
    }

    .chart {
        flex: auto;
        height: 70px;
        width: 100px;
    }

    .battery-level {
        text-align: center;
        padding-top: 6px;
        font-weight: bold;

        &.normal {
            color: #1EB154;
        }

        &.low {
            color: #AA0010;
        }

        .battery-level-number {
            font-size: 40px;
        }

        .battery-level-percent {
            font-size: 20px;
        }
    }

    .power-status {
        text-align: center;
        padding-top: 12px;
        font-size: 30px;
        font-weight: bold;
    }

    .attitude-container {
        text-align: center;

        .attitude-body {
            position: relative;
            display: inline-block;
            width: 120px;
            height: 120px;
            background: #FF000040;
            border-radius: 50%;
            overflow: hidden;

            .pitch-roll {
                width: 120px;
                height: 120px;
                transform-origin: 50% 50%;
                //transform: rotate(20deg);

                .pitch-image {
                    position: absolute;
                    left: -55px;
                    top: -55px;
                    width: 230px;
                    height: 230px;
                    transform-origin: 50% 50%;
                    //transform: translateY(20px);
                }

                .roll-image {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 120px;
                    height: 120px;
                }
            }

            .roll-pitch-zero {
                position: absolute;
                left: 0;
                top: 0;
                width: 120px;
                height: 120px;
            }
        }
    }
</style>
