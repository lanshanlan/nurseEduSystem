<template>
  <div id="searchInfo">
    <span><input type="text" id="tchName" placeholder="请输入课程组名称"></span>
    <span><input type="text" id="tchID" placeholder="请输入课程组编号"></span>
    <span><button id="searchFor">查找</button></span>
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
      height: 7rem;
      background-color: white;
    }
    input{
      margin-top: 2.5rem;
      font-size: 1rem;
      width: 11rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      padding-bottom: 0.2rem;
      height: 1.5rem;
      border: solid;
      border-color: #e6e6e6;
      margin-left: 5rem;
    }
    button{
      margin-top: 2.5rem;
      margin-right: 3rem;
      float: right;
      background-color: #158064;
      font-size: 0.8rem;
      color:#FFF;
      font-weight: bold;
      text-align: center;
      border-radius: 0.5rem;
      padding-bottom: 0.2rem;
      height: 2rem;
      min-width: 5rem;
      border: none;
    }
    button:hover{
      background-color: #00a539;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
