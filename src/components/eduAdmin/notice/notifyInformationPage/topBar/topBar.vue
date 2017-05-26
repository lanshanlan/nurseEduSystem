<template>
  <div id="notifyInfoTopBar" class="topBarDiv am-btn-group">
    <!--导航栏-->
    <router-link to="/eduAdmin/information/noticeManage"><button class="am-btn am-btn-success" style="margin-left: 5rem">公告管理</button></router-link>
    <router-link to="/eduAdmin/information/noticeSetting"><button class="am-btn am-btn-success">公告编辑</button></router-link>
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
    },
    mounted: function(){
      try{
        var buttons = document.getElementById("notifyInfoTopBar").getElementsByTagName("button");
        var authorityList = Json.parse(sessionStorage.getItem("authorityList"));
        for(var i=0;i<buttons.length;i++){
          buttons[i].style.display="none";
        }
        for(var j=0;j<authorityList.length;i++){
          if(authorityList[j] == "19"){
            buttons[0].style.display="inline";
          }else if(authorityList[j] == "18"){
            buttons[0].style.display="inline";
          }else if(authorityList[j] == "57"){
            buttons[0].style.display="inline";
          }
        }
      }catch(e){}
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
