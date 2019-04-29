<template>
  <ul :style="{transform:`rotate(${rotates*-6}deg)`}">
      <li v-for='(val,index) in compSeconds' :key='index' :class='{hover:index==(Seconds==0?59:Seconds-1)}'>{{val}}</li>
  </ul>
</template>

<script>
import {seconds} from '@/data/time'
export default {
  props: {
    Seconds: {
      type: [String, Number]
    }
  },
  data () {
    return {
      rotates: ''
    }
  },
  watch: {
    Seconds (val) {
      this.rotates = val
    }
  },
  computed: {
    compSeconds () {
      return seconds
    }
  }
}
</script>

<style lang="scss" scoped>
ul{

    @for $i from 1 through 60
{
    li:nth-child(#{$i})
    {
        transform: rotate(#{$i*6deg}) translateX(425px);
    }
}
}
</style>
