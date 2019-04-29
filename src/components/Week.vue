<template>
  <ul :style="{transform:`rotate(${rotates*-51}deg)`}">
      <li v-for='(val,index) in compWeek' :key='index' :class='{hover:index==Week-1}'>{{val}}</li>
  </ul>
</template>

<script>
import {week} from '@/data/time'
export default {
  props: {
    Week: {
      type: [String, Number]
    }
  },
  data () {
    return {
      rotates: ''
    }
  },
  watch: {
    Week (val) {
      this.rotates = val
    }
  },
  computed: {
    compWeek () {
      return week
    }
  }
}
</script>

<style lang="scss" scoped>
ul{

    @for $i from 1 through 7
{
    li:nth-child(#{$i})
    {
        transform: rotate(#{$i*51deg}) translateX(200px);
    }
}
}
</style>
