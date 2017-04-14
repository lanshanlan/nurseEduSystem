<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{

    }
  },
  created:function() {
    this.$http.get('../test.php').then(function (response) {
      console.log(response.body);
    });
  }
}
</script>

<style>
  @import "./assets/css/external.css";
#app {
  font-family: 'Microsoft YaHei', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
body{
  margin: 0;
}
/*设置body的外边距为0*/

</style>
