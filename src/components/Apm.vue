<template>
  <ul :style="{transform:`rotate(${rotates*-60}deg)`}">
      <li v-for='(val,index) in compApm' :key='index' :class='{hover:index+1==Apm}'>{{val}}</li>
  </ul>
</template>

<script>
import {apm} from '@/data/time'
export default {
  props: {
    Apm: {
      type: [String, Number]
    }
  },
  data () {
    return {
      rotates: ''
    }
  },
  watch: {
    Apm (val) {
      this.rotates = val
    }
  },
  computed: {
    compApm () {
      return apm
    }
  }
}
</script>

<style lang="scss" scoped>
ul{

    @for $i from 1 through 2
{
    li:nth-child(#{$i})
    {
        transform: rotate(#{$i*60deg}) translateX(255px);
    }
}
}
</style>
