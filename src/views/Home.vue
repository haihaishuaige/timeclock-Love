<template>
    <div class='home'>
        <Seconds :Seconds='Seconds'></Seconds>
        <Minutes :Minutes='Minutes'></Minutes>
        <Hours :Hours='Hours'></Hours>
        <Apm :Apm='Apm'></Apm>
        <Week :Week='Week'></Week>
        <Month :Month='Month'></Month>
        <Day :Day='Day'></Day>
    </div>
</template>

<script>
import Seconds from '@/components/Seconds'
import Minutes from '@/components/Minutes'
import Hours from '@/components/Hours'
import Apm from '@/components/Apm'
import Week from '@/components/Week'
import Month from '@/components/Month'
import Day from '@/components/Day'
export default {
  components: {
    Seconds,
    Minutes,
    Hours,
    Apm,
    Week,
    Day,
    Month
  },
  data () {
    return {
      Seconds: '',
      Minutes: '',
      Hours: '',
      Week: '',
      Day: '',
      Month: '',
      Apm: ''
    }
  },
  created () {
    setInterval(() => {
      var time = new Date()
      this.Month = time.getMonth() + 1
      this.Day = time.getDate()
      this.Week = time.getDay()
      this.Hours = time.getHours()
      this.Minutes = time.getMinutes()
      this.Seconds = time.getSeconds()
      this.Apm = Hours < 12 ? '1' : '2'
    }, 1000)
  }
}
</script>

<style lang="scss">
    .home{
        width: 100%;
        height: 100%;
        ul{
            list-style-type: none;
            position: absolute;
            margin:auto;
            height: 60px;
            width: 60px;
            left:0;
            top:0;
            right:0;
            bottom:0;
            transition: 0.1s 0.1s ease-in;
            li{
                position: absolute;
                width:60px;
                height:60px;
                color: #fff;
                    text-align: center;
                    font-size: 14px;
                    line-height: 20px;
                    &.hover {
                        text-shadow: rgb(255, 255, 255) 0px 0px 10px,
                        rgb(255, 255, 255) 0px 0px 20px, rgb(255, 0, 222) 0px 0px 30px,
                        rgb(255, 0, 222) 0px 0px 40px, rgb(255, 0, 222) 0px 0px 70px,
                        rgb(255, 0, 222) 0px 0px 80px, rgb(255, 0, 222) 0px 0px 100px;
                    }
            }
        }
    }
</style>
