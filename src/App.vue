<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <v-header ></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from './components/header'
  import vFooter from './components/footer'
export default {
  name: 'App',
  components:{
    vHeader,
    vFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/

}
  *{
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    color:#888;
  }
</style>
