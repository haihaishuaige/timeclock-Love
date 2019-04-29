<template>
  <ul :style="{transform:`rotate(${rotates*-30}deg)`}">
      <li v-for='(val,index) in compHours' :key='index' :class='{hover:index==(Hours>12?Hours-13:Hours-1)}'>{{val}}</li>
  </ul>
</template>

<script>
import {hour} from '@/data/time'
export default {
  props: {
    Hours: {
      type: [String, Number]
    }
  },
  data () {
    return {
      rotates: ''
    }
  },
  watch: {
    Hours (val) {
      this.rotates = val
    }
  },
  computed: {
    compHours () {
      return hour
    }
  }
}
</script>

<style lang="scss" scoped>
ul{

    @for $i from 1 through 12
{
    li:nth-child(#{$i})
    {
        transform: rotate(#{$i*30deg}) translateX(300px);
    }
}
}
</style>
