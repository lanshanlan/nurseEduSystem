<template>
  <div id="stdInquireGradeBar" class="topBarDiv am-btn-group">
    <!--导航栏-->
    <router-link to=""><button class="am-btn am-btn-success" style="margin-left: 5rem">学生教师信息</button></router-link>
    <router-link to=""><button class="am-btn am-btn-success">学生课表查询</button></router-link>
    <router-link to=""><button class="am-btn am-btn-success">学生信息通知</button></router-link>
    <button class="am-btn am-btn-success btn-active">学生查询成绩</button>
  </div>
</template>

<script>
  export default{
    name:'stdInquireGradeBar',
    data(){
      return{
        msg:''
      }
    }
  }

</script>

<style scoped>
  html{
    font-size: 100%;
  }
</style>
