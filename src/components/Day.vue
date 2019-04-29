<template>
  <ul :style="{transform:`rotate(${rotates*-11.9}deg)`}">
      <li v-for='(val,index) in compDay' :key='index' :class='{hover:index==Day-1}'>{{val}}</li>
  </ul>
</template>

<script>
import {day} from '@/data/time'
export default {
  props: {
    Day: {
      type: [String, Number]
    }
  },
  data () {
    return {
      rotates: ''
    }
  },
  watch: {
    Day (val) {
      this.rotates = val
    }
  },
  computed: {
    compDay () {
      return day
    }
  }
}
</script>

<style lang="scss" scoped>
ul{

    @for $i from 1 through 30
{
    li:nth-child(#{$i})
    {
        transform: rotate(#{$i*11.9deg}) translateX(130px);
    }
}
}
</style>
