<template>
  <div id="setSupervisorDropdown">
    <span><p>课程序号:01</p></span>
    <div>
      <span id="setSupSpan">设置督导员:</span>
      <div class="dropdown">
        <input type="text" id="changeSupervisor" placeholder="选择督导员">
        <div class="dropdown-content">
          <table v-for="supervisor in supervisors">
            <tr class="dropdownMenu" @click="supervisorClick(supervisor)">{{supervisor}}</tr>
          </table>
        </div>
      </div>
      <div class="dropdown">
        <input type="text" id="changeTime" placeholder="选择时间">
        <div class="dropdown-content">
          <table v-for="time in ctimes">
            <tr class="dropdownMenu" @click="timeClick(time)">{{time}}</tr>
          </table>
        </div>
      </div>
      <span><button id="save">保存</button></span>
      <span><button id="cancel">取消</button></span>
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
        //监听搜索内容点击选择，同步到课程表选择框
//          alert("Hello boy!");
        var changeSupervisor = document.getElementById("changeSupervisor");
        changeSupervisor.value = supervisor;
      },
      timeClick: function(time){
        //监听搜索内容点击选择，同步到课程表选择框
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
      height: 8rem;
      background-color: white;
    }
    #setSupSpan{
      margin-left: 5rem;
    }
    p{
      margin-top: 5rem;
      margin-left: 5rem;
    }
    input{
      margin-left: 3rem;
      font-size: 1rem;
      width: 11rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      padding-bottom: 0.2rem;
      height: 1.5rem;
      border: solid;
      border-color: #e6e6e6;
    }
    button{
      margin-left: 3rem;
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
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: relative;
      margin-left: 3rem;
      z-index: 2;
      background-color: #f9f9f9;
      min-width: 2rem;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      padding: 1rem;
      opacity: 1.0;
    }
    .dropdown:hover .dropdown-content {
      display: block;
      background-color: #f9f9f9;
      opacity: 1.0;
      position: relative;
    }
    .dropdownMenu:hover{
      background-color:#2F6FAD ;
      cursor: default;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
