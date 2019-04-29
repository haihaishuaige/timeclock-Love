<template>
  <ul :style="{transform:`rotate(${rotates*-30}deg)`}">
      <li v-for='(val,index) in compMonth' :key='index' :class='{hover:index==Month-1}'>{{val}}</li>
  </ul>
</template>

<script>
import {month} from '@/data/time'
export default {
  props: {
    Month: {
      type: [String, Number]
    }
  },
  data () {
    return {
      rotates: ''
    }
  },
  watch: {
    Month (val) {
      this.rotates = val
    }
  },
  computed: {
    compMonth () {
      return month
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
        transform: rotate(#{$i*30deg}) translateX(70px);
    }
}
}
</style>
