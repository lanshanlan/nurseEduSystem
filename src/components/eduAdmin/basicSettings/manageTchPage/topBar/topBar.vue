<template>
  <div id="mngTchPageTopBar" class="nav">
    <!--导航栏-->
    <ul>
      <li><a href="#">教师管理</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'mngTchPageTopBar',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    .nav{
      width:100%;
      height:35px;
      background-color: #158064;
      margin:0 auto;
    }
    .nav li{
      width:260px;
      float:left;
      margin-left:70px;
      list-style:none;
      line-height:35px;
      text-align:center;
    }
    .nav li:hover{
      background-color: #00a539;
    }
    .nav li a{
      text-decoration:none;
      color:#FFF;
      font-weight: bold;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
