<template>
  <div id="stdInquireGradeChangeTerm">
    <select class="selectWM">
      <option disabled selected>选择学期</option>
      <option v-for="term in terms">{{term}}</option>
    </select>
    <span><button id="changebut" class="am-btn am-btn-success am-radius buttonWM">切换学期</button></span>
    <span><button id="allbut" class="am-btn am-btn-success am-radius buttonWM">所有学期成绩</button></span>
  </div>
</template>

<script>
    export default {
        name: 'stdInquireGradeChangeTerm',
        data () {
            return {
              terms:[
                '2014-2015:第一学期',
                '2014-2015:第二学期',
                '2015-2016:第一学期',
                '2015-2016:第二学期',
                '2016-2017:第一学期',
                '2016-2017:第二学期',
                '2017-2018:第一学期',
                '2017-2018:第二学期'
              ]
            }
        },
      methods:{
        yearClick: function(year,term){
          //监听搜索内容点击选择，同步到课程表选择框
//          alert("Hello boy!");
          var changeTerm = document.getElementById("changeTerm");
          changeTerm.value = year+': '+term;
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #stdInquireGradeChangeTerm{
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
      min-width: 5.6rem;
      margin: 0 0.7rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
