<template>
  <div>
    <div id="setSupervisorDropdown">
      <span><p>课程编号:11111</p></span>
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
    <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <div id="supervisorTable" style="background-color: white">
        <span><p>*下面是已分配督导员的课程</p></span>
        <table id="supervisorTableSy" class="operationTable" style="table-layout: fixed;">
          <!--已分配督导员的课程的表格-->
          <thead>
          <tr>
            <th width="12%">当前状态</th>
            <th width="24%">班级名称</th>
            <th width="24%">课程名称</th>
            <th width="16%">课程编号</th>
            <th width="12%">任课老师</th>
            <th width="12%">督导状态</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for=" courseInfo in courseInfos">
            <td v-text="courseInfo.status"></td>
            <td v-text="courseInfo.className"></td>
            <td v-text="courseInfo.courseName"></td>
            <td v-text="courseInfo.courseID"></td>
            <td v-text="courseInfo.tch"></td>
            <td><button class="am-btn am-btn-success am-radius">查看</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'supervisorTable',
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
              ],
              courseInfos:[
                {status:'已读',className:'对口高职 2015 护理 (9+3) 1班 + 普通高中 2015 护理2班',courseName:'护理管理学',courseID:'10301',tch:'何平'},
                {status:'未读',className:'对口高职 2015 护理 1班 + 普通高中 2015 护理1班',courseName:'护理管理学',courseID:'10301',tch:'何平'}
              ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.courseInfos = response.body.courseInfos;
        });
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
      color: grey;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
