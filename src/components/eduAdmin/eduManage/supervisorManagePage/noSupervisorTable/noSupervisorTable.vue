<template>
  <div>
    <div id="noSupervisorDiv" style="display: inline">
      <div id="tchDropdown" style="height: 5rem;margin: 0.6rem 5rem;background-color: white;">
        <select id="teacherSelect" class="selectWM" v-model="noSupervisorinfoKey.teacherId" @change="teacherClick()">
          <option value="">选择任课教师</option>
          <option v-for="teacher in teacherList" :value="teacher.teacherId">{{teacher.teacherName}}</option>
        </select>
        <!--任课教师选择下拉列表-->
        <select id="courseSelect" class="selectWM" v-model="noSupervisorinfoKey.courseId" @click="courseClick()">
          <option value="">选择课程</option>
          <option v-for="course in courseList" :value="course.courseId">{{course.courseName}}</option>
        </select>
        <!--课程选择下拉列表-->
        <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM" @click="checkNoSupervisorInfoClick()">查找</button></span>
        <span><button id="leadOut" class="am-btn am-btn-success am-radius buttonWM" @click="downloadClick">下载</button></span>
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
          <tr v-for=" notSettedSupervisorCourseInfo in notSettedSupervisorCourseInfoList">
            <td @click="setSupervisorClick(notSettedSupervisorCourseInfo.courseId,notSettedSupervisorCourseInfo.courseName,notSettedSupervisorCourseInfo.classId)" class="setSupervisor"><u>设置督导</u></td>
            <td v-text="notSettedSupervisorCourseInfo.className"></td>
            <td v-text="notSettedSupervisorCourseInfo.courseId"></td>
            <td v-text="notSettedSupervisorCourseInfo.courseName"></td>
            <td v-text="notSettedSupervisorCourseInfo.teacherName"></td>
          </tr>
          </tbody>
        </table>
        <div class="buttonDiv">
          <span><button id="goTo" class="bottomButton am-btn am-btn-success am-radius" @click="goToClick()">查看已设置督导课程</button></span>
        </div>
      </div>
    </div>
    <div id="supervisorDiv" style="display: none">
      <div id="setSupervisorDropdown">
        <div style="height: 5rem;margin: 0.6rem 5rem;background-color: white;">
          <span><p>课程名称:{{setCourseName}}</p></span>
          <div>
            <span id="setSupSpan">设置督导员:</span>
            <select id="supervisorSelect" class="selectWM" v-model="supervisorinfoKey.supervisorId" @change="supervisorClick()">
              <option value="">选择督导员</option>
              <option v-for="supervisor in supervisorList" :value="supervisor.supervisorId">{{supervisor.supervisorName}}</option>
            </select>
            <!--督导员选择下拉列表-->
            <select id="timeSelect" class="selectWM" v-model="supervisorinfoKey.time">
              <option value="">选择时间</option>
              <option v-for="time in times" :value="'第'+time.week+'周第'+time.weekDay+'天第'+time.lessonNum+'节课'">第{{time.week}}周第{{time.weekDay}}天第{{time.lessonNum}}节课</option>
            </select>
            <!--督导时间选择下拉列表-->
            <span><button id="save" class="am-btn am-btn-success am-radius buttonWM" @click="saveSupervisorInfoClick()">保存</button></span>
            <span><button id="cancel" class="am-btn am-btn-success am-radius buttonWM" @click="restoreSupervisorInfoClick()">取消</button></span>
          </div>
        </div>
      </div>
      <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
        <div id="supervisorTable" style="background-color: white">
          <span><p>*下面是已分配督导员的课程</p></span>
          <table id="supervisorTableSy" class="operationTable" style="table-layout: fixed;">
            <!--已分配督导员的课程的表格-->
            <thead>
            <tr>
              <th width="10%">当前状态</th>
              <th width="10%">督导老师</th>
              <th width="20%">班级名称</th>
              <th width="20%">课程编号</th>
              <th width="20%">课程名称</th>
              <th width="10%">任课老师</th>
              <th width="10%">督导反馈</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for=" settedSupervisorCourseInfo in settedSupervisorCourseInfoList">
              <td v-if="settedSupervisorCourseInfo.status === '1'">已读</td>
              <td v-if="settedSupervisorCourseInfo.status === '0'"><u>未读</u></td>
              <td v-text="settedSupervisorCourseInfo.supervisorName"></td>
              <td v-text="settedSupervisorCourseInfo.className"></td>
              <td v-text="settedSupervisorCourseInfo.courseId"></td>
              <td v-text="settedSupervisorCourseInfo.courseName"></td>
              <td v-text="settedSupervisorCourseInfo.teacherName"></td>
              <td><button class="am-btn am-btn-success am-radius" @click="checksupervisorBackInfoClick(settedSupervisorCourseInfo.supervisorId,settedSupervisorCourseInfo.classId,settedSupervisorCourseInfo.courseId)">查看</button></td>
            </tr>
            </tbody>
          </table>
          <div class="buttonDiv">
            <span><button id="goBack" class="bottomButton am-btn am-btn-success am-radius" @click="supervisorTableGoBackClick()">返回</button></span>
          </div>
        </div>
      </div>
    </div>
    <div id="superviseBackTable" style="display: none">
      <div id="superviseBackShow" style="padding: 0.6rem 5rem;background-color: #f3f3f3;">
        <table class="normalTable">
          <thead>
          <tr>
            <th colspan=4>督导反馈</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>督导日期</td>
            <td colspan=3>{{superviseInfoList.superviseTime}}</td>
          </tr>
          <tr>
            <td rowspan=8>评分</td>
            <td>学生出勤情况</td> <td>{{superviseInfoList.attendanceInfo}}</td>
          </tr>
          <tr><td>授课内容</td> <td>{{superviseInfoList.teachContent}}</td></tr>
          <tr><td>教师素养得分</td> <td>{{superviseInfoList.teacherQualityScored}}</td></tr>
          <tr><td>教学目标得分</td> <td>{{superviseInfoList.teachGoalsScored}}</td></tr>
          <tr><td>教学内容得分</td> <td>{{superviseInfoList.teachContentScored}}</td></tr>
          <tr><td>教学方法得分</td> <td>{{superviseInfoList.teachMethodsScored}}</td></tr>
          <tr><td>教学常规得分</td> <td>{{superviseInfoList.teachRoutineScored}}</td></tr>
          <tr><td>教学效果得分</td> <td>{{superviseInfoList.teachEffectScored}}</td></tr>
          <tr><td>督导员意见</td>
            <td colspan=3>{{superviseInfoList.commentsInfo}}</td>
          </tr>
          <tr><td>教务人员意见</td>
            <td colspan=3 v-if="superviseInfoList.forwardInfo.length===0"><input class="supervisorBackInput" type="text" v-model="superviseBackinfoKey.forwardInfo"></td>
            <td colspan=3 v-else>{{superviseInfoList.forwardInfo}}</td>
          </tr>
          </tbody>
        </table>
        <div class="buttonDiv">
          <span><button class="bottomButton am-btn am-btn-success am-radius" @click="submitClick()">提交</button></span>
          <span><button class="bottomButton am-btn am-btn-success am-radius" @click="cancelClick()">取消</button></span>
          <span><button class="bottomButton am-btn am-btn-success am-radius" @click="superviseBackTableGoBackClick()">返回</button></span>
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
                teacherId:'',
                courseId:''
              },
              teacherList:[
                {teacherName:'何平',teacherId:'111111'},
                {teacherName:'张继',teacherId:'222222'},
                {teacherName:'李伟',teacherId:'333333'}
              ],
              courseList:[
                {courseName:'护理学',courseId:'123456'},
                {courseName:'西医',courseId:'223456'},
                {courseName:'临床',courseId:'323456'}
              ],
              supervisorinfoKey:{
                courseId:'',
                supervisorId:'',
                time:''
              },
              supervisorList:[
                {supervisorName:'何平',supervisorId:'111111'},
                {supervisorName:'张继',supervisorId:'222222'},
                {supervisorName:'李伟',supervisorId:'333333'}
              ],
              superviseBackinfoKey:{
                supervisorId:'',
                classId:'',
                courseId:'',
                forwardInfo:''
              },
              setMsg:'1',
              setCourseName:'请选择',
              times:[
                {week:'1',weekDay:'2',lessonNum:'3'},
                {week:'4',weekDay:'5',lessonNum:'6'},
                {week:'7',weekDay:'8',lessonNum:'9'}
              ],
              notSettedSupervisorCourseInfoList:[
                  {status:'1',supervisorName:'',supervisorId:'',className:'对口高职 2015 护理1班',classId:'11111',courseName:'护理管理学',courseId:'10300',teacherName:'季军'},
                  {status:'0',supervisorName:'',supervisorId:'',className:'对口高职 2015 护理2班',classId:'22222',courseName:'护理管理学',courseId:'10300',teacherName:'季军'}
                ],
              settedSupervisorCourseInfoList:[
                  {status:'1',supervisorName:'李晓',supervisorId:'12345',className:'普通高中 2015 护理1班',classId:'33333',courseName:'护理管理学',courseId:'10301',teacherName:'何平'},
                  {status:'0',supervisorName:'张玲',supervisorId:'22345',className:'普通高中 2015 护理2班',classId:'44444',courseName:'护理管理学',courseId:'10301',teacherName:'何平'}
              ],
              superviseInfoList:{
                superviseTime:'2016.01.01',
                attendanceInfo:'47人，应到47人',
                teachContent:'授课内容',
                teacherQualityScored:'88',
                teachGoalsScored:'88',
                teachContentScored:'88',
                teachMethodsScored:'88',
                teachRoutineScored:'88',
                teachEffectScored:'88',
                commentsInfo:'督导意见',
                forwardInfo:''
              }
            }
        },
      beforeMount:function() {
        this.$http.post('./teachingSupervision/selectNotSupervisorList',{},{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.courseList = response.body.courseList;
          this.teacherList = response.body.teacherList;
          this.notSettedSupervisorCourseInfoList = response.body.supervisorManage.notSettedSupervisorCourseInfoList;
        },function(error){
          console.log("获取error");
        });
      },
      methods:{
        checkNoSupervisorInfoClick: function(){
          this.$http.post('./checkNoSupervisorInfoJson',{
            "teacherId":this.noSupervisorinfoKey.teacherId,
            "courseId":this.noSupervisorinfoKey.courseId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.setMsg = response.body.checkNoSupervisorInfoList.setMsg;
            if(this.setMsg === '0'){
              this.notSettedSupervisorCourseInfoList = response.body.checkNoSupervisorInfoList.notSettedSupervisorCourseInfoList;
            }
            else{
              alert("您查询的课程已设置督导，请点击查看已设置督导课程！");
            }
          },function(error){
            console.log("获取error");
          });
        },
        downloadClick:function(){
          location.href="./teachingSupervision/exportExcel";
        },
        teacherClick:function(){
          this.$http.post('./noSupervisorTeacherClickJson',{
            "teacherId":this.noSupervisorinfoKey.teacherId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.courseList = response.body.courseList;
          },function(error){
            console.log("获取error");
          });
          this.noSupervisorinfoKey.courseId = "0";
        },
        setSupervisorClick:function(courseId,courseName,classId){
          var noSupervisorDiv = document.getElementById("noSupervisorDiv");
          var supervisorDiv = document.getElementById("supervisorDiv");
          this.setCourseName = courseName;
          this.$http.post('./teachingSupervision/selectSupervisorList',{},{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.settedSupervisorCourseInfoList = response.body.supervisorManage.settedSupervisorCourseInfoList;
          },function(error){
            console.log("获取error");
          });
          this.supervisorinfoKey.courseId = courseId;
          supervisorDiv.style.display = "inline";
          noSupervisorDiv.style.display = "none";
        },
//        从未设置督导页面跳转到已设置督导页面
        goToClick:function(){
          var noSupervisorDiv = document.getElementById("noSupervisorDiv");
          var supervisorDiv = document.getElementById("supervisorDiv");
          var setSupervisorDropdown = document.getElementById("setSupervisorDropdown");
          supervisorDiv.style.display = "inline";
          noSupervisorDiv.style.display = "none";
          setSupervisorDropdown.style.display = "none";
          this.$http.post('./teachingSupervision/selectSupervisorList',{},{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.settedSupervisorCourseInfoList = response.body.supervisorManage.settedSupervisorCourseInfoList;
          },function(error){
            console.log("获取error");
          });
        },
        supervisorClick:function(){
          this.$http.post('./teachingSupervision/getTimeAndPlaceList',{
            "supervisorId":this.supervisorinfoKey.supervisorId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.times = response.body.times;
          },function(error){
            console.log("获取error");
          });
          this.supervisorinfoKey.time = "0";
        },
        saveSupervisorInfoClick:function(){
          this.$http.post('./teachingSupervision/setSupervisor',{
            "supervisorId":this.supervisorinfoKey.supervisorId,
            "time":this.supervisorinfoKey.time,
            "courseId":this.supervisorinfoKey.courseId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.superviseInfoList = response.body.checksupervisorBackInfoList.superviseInfoList;
          },function(error){
            console.log("获取error");
          });
        },
        restoreSupervisorInfoClick:function(){
          this.supervisorinfoKey.supervisorName = '';
          this.supervisorinfoKey.time = '0';
        },
//        从已设置督导页面跳转到督导反馈页面
        checksupervisorBackInfoClick:function(supervisorId,classId,courseId){
          var supervisorDiv = document.getElementById("supervisorDiv");
          var superviseBackTable = document.getElementById("superviseBackTable");
          this.superviseBackinfoKey.supervisorId = supervisorId;
          this.superviseBackinfoKey.classId = classId;
          this.superviseBackinfoKey.courseId = courseId;
          this.superviseBackinfoKey.forwardInfo = "";
          this.$http.post('./teachingSupervision/checkSupervisionResult',{
            "supervisorId":supervisorId,
            "classId":classId,
            "courseId":courseId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.superviseInfoList = response.body.checksupervisorBackInfoList.superviseInfoList;
          },function(error){
            console.log("获取error");
          });
          supervisorDiv.style.display = "none";
          superviseBackTable.style.display = "inline"

        },
//        从已设置督导页面跳转到未设置督导页面
        supervisorTableGoBackClick:function(){
          var noSupervisorDiv = document.getElementById("noSupervisorDiv");
          var supervisorDiv = document.getElementById("supervisorDiv");
          var setSupervisorDropdown = document.getElementById("setSupervisorDropdown");
          this.$http.post('./teachingSupervision/selectNotSupervisorList',{},{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.courseList = response.body.courseList;
            this.teacherList = response.body.teacherList;
            this.notSettedSupervisorCourseInfoList = response.body.notSettedSupervisorCourseInfoList;
          },function(error){
            console.log("获取error");
          });
          noSupervisorDiv.style.display = "inline";
          supervisorDiv.style.display = "none";
          setSupervisorDropdown.style.display = "inline";
        },
        submitClick:function(){
          if(this.superviseBackinfoKey.forwardInfo.length === 0){
            alert("您没有输入教务人员意见");
          }
          else{
            this.$http.post('./teachingSupervision/setFeedbackSupervisionResult',{
              "forwardInfo":this.superviseBackinfoKey.forwardInfo
            },{
              "Content-Type":"application/json"
            }).then(function (response) {
              console.log(response);
            },function(error){
              console.log("获取error");
            });
          }
        },
        cancelClick:function(){
          this.superviseBackinfoKey.forwardInfo = "";
        },
//        从督导反馈页面跳转到已设置督导页面
        superviseBackTableGoBackClick:function(){
          var supervisorDiv = document.getElementById("supervisorDiv");
          var superviseBackTable = document.getElementById("superviseBackTable");
          supervisorDiv.style.display = "inline";
          superviseBackTable.style.display = "none"
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
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
      min-width: 5.6rem;
    }
    .buttonDiv{
      text-align: center;
    }
    .supervisorBackInput{
      width: 80%;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
