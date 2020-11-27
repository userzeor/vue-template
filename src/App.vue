<template>
  <div id="app">
    <router-view :key="this.$route.path"></router-view>
  </div>
</template>

<script>
export default {
  mounted(){
    
  },
}
</script>

<style>
html, body {  
  width: 100%;  
  height: 100%;  
  margin: 0;  
  padding: 0;  
  position: relative;  
}
#app {
  width: 100%;  
  height: 100%;  
  background: #fff;  
  overflow: scroll;  
  -webkit-overflow-scrolling: touch;  
  position: absolute;  
  left:0;  
  top:0; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
