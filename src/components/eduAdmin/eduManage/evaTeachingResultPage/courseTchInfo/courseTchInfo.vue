<template>
    <div id="courseTchInfo">
      <select class="selectWM">
        <option disabled selected>选择学期</option>
        <option v-for="term in terms">{{term}}</option>
      </select>
      <span><input type="text" id="courseID" class="inputWM" placeholder="课程代码"></span>
      <span><input type="text" id="courseName" class="inputWM" placeholder="课程名称"></span>
      <span><input type="text" id="tchID" class="inputWM" placeholder="教师编码"></span>
      <span><input type="text" id="tchName" class="inputWM" placeholder="教师姓名"></span>
      <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查询</button></span>
    </div>
</template>

<script>
    export default {
        name: 'courseTchInfo',
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
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #courseTchInfo{
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
