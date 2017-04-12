<template>
  <div id="dropdownInfo">
    <span><input type="text" id="tchName" class="inputWM" placeholder="请输入姓名"></span>
    <span><input type="text" id="tchID" class="inputWM" placeholder="请输入编号"></span>
    <span><button id="downloadForm" class="am-btn am-btn-success am-radius buttonWM">下载模板</button></span>
    <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查找</button></span>
    <span><button id="leadIn" class="am-btn am-btn-success am-radius buttonWM">导入</button></span>
    <span><button id="leadOut" class="am-btn am-btn-success am-radius buttonWM">导出</button></span>
  </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #dropdownInfo{
      margin: 0.6rem 5rem;
      background-color: white;
    }
    .inputWM{
      width: 8rem;
      margin: 0 0.7rem;
    }
    .buttonWM{
      width: 5.6rem;
      margin: 0 0.7rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
