<template>
  <div id="searchInfo">
    <span><input type="text" id="groupID" class="inputWM" placeholder="请输入教研组编号"></span>
    <span><input type="text" id="tchID" class="inputWM" placeholder="请输入教师编号"></span>
    <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查找</button></span>
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
        font-size: 100%;
    }
    #searchInfo{
      margin: 0.6rem 5rem;
      background-color: white;
    }
    .selectWM{
      width: 8rem;
      margin: 0 0.7rem;
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
