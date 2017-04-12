<template>
  <div id="tchDropdown">
      <!--教师选择下拉列表-->
    <select class="selectWM">
      <option disabled selected>任课教师</option>
      <option v-for="tch in tchs">{{tch}}</option>
    </select>
      <!--课程选择下拉列表-->
    <select class="selectWM">
      <option disabled selected>任课教师</option>
      <option v-for="course in courses">{{course}}</option>
    </select>
    <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查找</button></span>
    <span><button id="leadOut" class="am-btn am-btn-success am-radius buttonWM">导出</button></span>
  </div>
</template>

<script>
    export default {
        name: 'tchDropdown',
        data () {
            return {
                tchs:[
                  '何平',
                  '陈浩',
                  '李季'
                ],
              courses:[
                '职业生涯规划',
                '哲学与人生',
                '护理学',
                '生理学',
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
    #tchDropdown{
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
