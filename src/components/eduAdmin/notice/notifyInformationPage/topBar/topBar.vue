<template>
  <div id="mngGradePageTopBar" class="topBarDiv am-btn-group">
    <!--导航栏-->
    <router-link to="/noticeManage"><button class="am-btn am-btn-success" style="margin-left: 5rem">公告管理</button></router-link>
    <router-link to="/noticeSetting"><button class="am-btn am-btn-success">公告编辑</button></router-link>
    <button class="am-btn am-btn-success btn-active">公告信息</button>
  </div>
</template>

<script>
  export default {
    name: 'mngStdPageTopBar',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
  html{
    font-size: 62.5%;
  }


  @media screen and (max-width: 1023px) {
    html {
      font-size: 56%;
    }
  }
</style>
