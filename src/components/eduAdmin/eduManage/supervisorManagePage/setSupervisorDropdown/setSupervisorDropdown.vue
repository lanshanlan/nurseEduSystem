<template>
  <div id="setSupervisorDropdown">
    <span><p>课程序号:01</p></span>
    <div>
      <span id="setSupSpan">设置督导员:</span>
        <!--督导员选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>选择督导员</option>
        <option v-for="supervisor in supervisors">{{supervisor}}</option>
      </select>
        <!--督导时间选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>选择时间</option>
        <option v-for="time in times">{{time}}</option>
      </select>
      <span><button id="save" class="am-btn am-btn-success am-radius buttonWM">保存</button></span>
      <span><button id="cancel" class="am-btn am-btn-success am-radius buttonWM">取消</button></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setSupervisorDropdown',
    data () {
      return {
        supervisors:[
          '何平',
          '陈浩',
          '李季'
        ],
        times:[
          '1-5周',
          '6-10周',
          '7-15周',
          '16-20周',
        ]
      }
    },
    methods:{
      supervisorClick: function(supervisor){
        //监听搜索内容点击选择，同步到督导员选择框
//          alert("Hello boy!");
        var changeSupervisor = document.getElementById("changeSupervisor");
        changeSupervisor.value = supervisor;
      },
      timeClick: function(time){
        //监听搜索内容点击选择，同步到督导时间选择框
//          alert("Hello boy!");
        var changeTime = document.getElementById("changeTime");
        changeTime.value = time;
      }
    }
  }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #setSupervisorDropdown{
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
    p{
      margin-top: 5rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
