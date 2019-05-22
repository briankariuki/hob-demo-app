<template>
  <div id="app">
    <v-app>
      <component :is="layout">
        <router-view :layout.sync="layout"/>
      </component>
    </v-app>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      layout: 'div',
    };
  }
}
</script>


<style lang="scss">
/*Global Styles */
.text-center {
  text-align: center;
}
.text-dark {
  color: rgba(0, 0 ,0, 0.87)
}
.error-message{
  color: #1A237E;
}
.text-dark-bg {
  background-color: rgba(0, 0 ,0, 0.87)
}
body{
  background-color: rgba(231, 231, 231, 0.90)
}
</style>
