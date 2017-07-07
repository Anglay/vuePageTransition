<template>
    <div id="app">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    data:function(){
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
}
</script>

<style>
  *{
      margin: 0;
      padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .child-view {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
   opacity: 0;
   -webkit-transform: translate(50px, 0);
   transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
   opacity: 0;
   -webkit-transform: translate(-50px, 0);
   transform: translate(-50px, 0);
  }
</style>
