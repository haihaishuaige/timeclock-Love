<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
body,html{
  height:100%;
  width:100%;
  overflow: hidden;
   background: #000;
  &::after{
    content:'I Love You';
    position: absolute;
    // height:100%;
    width:100%;
    // left:50%;
    top:40%;
    transform: translate(-50%,-50%);
    font-size: 150px;
    text-align: center;
    color:pink;
      text-shadow: rgb(255, 255, 255) 0px 0px 10px,
                      rgb(255, 255, 255) 0px 0px 20px, rgb(255, 0, 222) 0px 0px 30px,
                      rgb(255, 0, 222) 0px 0px 40px, rgb(255, 0, 222) 0px 0px 70px,
                      rgb(255, 0, 222) 0px 0px 80px, rgb(255, 0, 222) 0px 0px 100px;
                      opacity:.3;
    animation: love infinite 2s;
  }
  @keyframes love {
    0%{
      transform: scale(1.4);
    }
    50%{
      transform: scale(.3);
    }
     100%{
      transform: scale(1.4);
    }
  }
}
</style>
