<template>
  <div>
    <div id="noSupervisorDiv" style="display: inline">
      <div id="tchDropdown" style="height: 5rem;">
        <!--教师选择下拉列表-->
        <span><input type="text" id="teacherName" class="inputWM" placeholder="请输入任课教师姓名" v-model="noSupervisorinfoKey.teacherName"></span>
        <span><input type="text" id="courseName" class="inputWM" placeholder="请输入课程名称" v-model="noSupervisorinfoKey.courseName"></span>
        <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM" @click="checkNoSupervisorInfoClick()">查找</button></span>
        <span><button id="leadOut" class="am-btn am-btn-success am-radius buttonWM">导出</button></span>
      </div>
      <div id="noSupervisorTable" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
        <span><p>*下面是筛选后的课程</p></span>
        <!--未设置督导的课程的表格-->
        <table id="noSupervisorTableSy" class="normalTable" style="table-layout: fixed;">
          <thead>
          <tr>
            <th width="15%">请选择</th>
            <th width="25%">班级名称</th>
            <th width="20%">课程编号</th>
            <th width="25%">课程名称</th>
            <th width="15%">任课老师</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for=" courseInfo in courseInfoList" v-if="courseInfo.setted === '0'">
            <td @click="setSupervisorClick(courseInfo.courseId,courseInfo.courseName)"  class="setSupervisor"><u>设置督导</u></td>
            <td v-text="courseInfo.className"></td>
            <td v-text="courseInfo.courseId"></td>
            <td v-text="courseInfo.courseName"></td>
            <td v-text="courseInfo.teacherName"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="supervisorDiv" style="display: none">
      <div id="setSupervisorDropdown" style="height: 5rem;">
        <span><p>课程名称:    {{setCourseName}}</p></span>
        <div>
          <span id="setSupSpan">设置督导员:</span>
          <span><input type="text" id="supervisorName" class="inputWM" placeholder="请输入督导员姓名" v-model="supervisorinfoKey.supervisorName"></span>
          <!--督导时间选择下拉列表-->
          <select class="selectWM" v-model="supervisorinfoKey.time">
            <option value="0">选择时间</option>
            <option v-for="time in times" :value="time">{{time}}</option>
          </select>
          <span><button id="save" class="am-btn am-btn-success am-radius buttonWM" @click="saveSupervisorInfoClick()">保存</button></span>
          <span><button id="cancel" class="am-btn am-btn-success am-radius buttonWM" @click="restoreSupervisorInfoClick()">取消</button></span>
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
              <th width="12%">督导老师</th>
              <th width="12%">班级名称</th>
              <th width="16%">课程编号</th>
              <th width="24%">课程名称</th>
              <th width="12%">任课老师</th>
              <th width="12%">督导状态</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for=" courseInfo in courseInfoList" v-if="courseInfo.setted === '1'">
              <td v-if="courseInfo.status === '1'">已读</td>
              <td v-if="courseInfo.status === '0'"><u>未读</u></td>
              <td v-text="courseInfo.supervisorName"></td>
              <td v-text="courseInfo.className"></td>
              <td v-text="courseInfo.courseId"></td>
              <td v-text="courseInfo.courseName"></td>
              <td v-text="courseInfo.teacherName"></td>
              <td><button class="am-btn am-btn-success am-radius">查看</button></td>
            </tr>
            </tbody>
          </table>
          <div id="buttonDiv">
            <span><button id="goBack" class="bottomButton am-btn am-btn-success am-radius" @click="goBackClick()">返回</button></span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'noSupervisorTable',
        data () {
            return {
              noSupervisorinfoKey:{
                teacherName:'',
                courseName:''
              },
              supervisorinfoKey:{
                supervisorName:'',
                time:'0'
              },
              setCourseName:'请选择',
              times:[
                '1-5周',
                '6-10周',
                '7-15周',
                '16-20周'
              ],
                courseInfoList:[
                  {setted:'0',status:'1',supervisorName:'',className:'对口高职 2015 护理1班',courseName:'护理管理学',courseId:'10300',teacherName:'季军'},
                  {setted:'0',status:'0',supervisorName:'',className:'对口高职 2015 护理2班',courseName:'护理管理学',courseId:'10300',teacherName:'季军'},
                  {setted:'1',status:'1',supervisorName:'李晓',className:'普通高中 2015 护理1班',courseName:'护理管理学',courseId:'10301',teacherName:'何平'},
                  {setted:'1',status:'0',supervisorName:'张玲',className:'普通高中 2015 护理2班',courseName:'护理管理学',courseId:'10301',teacherName:'何平'}
                ]
            }
        },
      beforeMount:function() {
        this.$http.post('../supervisorManageJson',{},{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.courseInfoList = response.body.courseInfoList;
        },function(error){
          console.log("获取error");
        });
      },
      methods:{
        checkNoSupervisorInfoClick: function(){
          this.$http.post('../checkNoSupervisorInfoJson',{
            "noSupervisorinfoKey":this.noSupervisorinfoKey
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.courseInfoList = response.body.courseInfoList;
          },function(error){
            console.log("获取error");
          });
        },
        setSupervisorClick:function(courseId,courseName){
          var noSupervisorDiv = document.getElementById("noSupervisorDiv");
          var supervisorDiv = document.getElementById("supervisorDiv");
          this.setCourseName = courseName;
          this.$http.post('../setSupervisorJson',{
            "courseId":courseId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.courseInfoList = response.body.setSupervisor.courseInfoList;
            this.times = response.body.setSupervisor.times;
          },function(error){
            console.log("获取error");
          });
          noSupervisorDiv.style.display = "none";
          supervisorDiv.style.display = "inline";
        },
        saveSupervisorInfoClick:function(){
          this.$http.post('../saveSupervisorInfoJson',{
            "supervisorinfoKey":this.supervisorinfoKey
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.courseInfoList = response.body.courseInfoList;
          },function(error){
            console.log("获取error");
          });
        },
        restoreSupervisorInfoClick:function(){
          this.supervisorinfoKey.supervisorName = '';
          this.supervisorinfoKey.time = '0';
        },
        goBackClick:function(){
          noSupervisorDiv.style.display = "inline";
          supervisorDiv.style.display = "none";
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #tchDropdown,#setSupervisorDropdown{
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
    .setSupervisor{
      color: #158064;
      cursor: pointer;
    }
    .bottomButton{
      margin-top: 1rem;
      margin-right: 1.4rem;
    }
    #buttonDiv{
      text-align: center;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
