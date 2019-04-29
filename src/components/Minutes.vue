<template>
  <ul :style="{transform:`rotate(${rotates*-6}deg)`}">
      <li v-for='(val,index) in compMinutes' :key='index' :class='{hover:index==(Minutes==0?59:Minutes-1)}'>{{val}}</li>
  </ul>
</template>

<script>
import {minute} from '@/data/time'
export default {
  props: {
    Minutes: {
      type: [String, Number]
    }
  },
  data () {
    return {
      rotates: ''
    }
  },
  watch: {
    Minutes (val) {
      this.rotates = val
    }
  },
  computed: {
    compMinutes () {
      return minute
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
        transform: rotate(#{$i*6deg}) translateX(360px);
    }
}
}
</style>
