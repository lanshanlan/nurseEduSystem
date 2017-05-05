<template>
  <div>
    <div id="searchInfo">
      <select id="groupSelect" class="selectWM" v-model="teacherinfoKey.groupId" @change="groupClick()">
        <option value="0">选择教研组</option>
        <option v-for="group in groupList" :value="group.groupId">{{group.groupName}}</option>
      </select>
      <!--教研组选择下拉列表-->
      <select id="teacherSelect" class="selectWM" v-model="teacherinfoKey.teacherId">
        <option value="0">选择教师</option>
        <option v-for="teacher in teacherList" :value="teacher.teacherId">{{teacher.teacherName}}</option>
      </select>
      <!--教师选择下拉列表-->
      <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM" @click="checkTeachingPlanInfoClick()">查找</button></span>
    </div>
    <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <div id="courseGroupTableDiv" style="background-color: white">
        <!--课程培养方案表格-->
        <table id="courseGroupTable" class="operationTable" style="table-layout: fixed;">
          <thead>
          <tr>
            <th>教研组编号</th>
            <th>教研组名称</th>
            <th>教师编号</th>
            <th>教师姓名</th>
            <th>组长</th>
            <th>导出</th>
            <th>审核</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for=" courseGroupInfo in  courseGroupInfos">
            <td v-text="courseGroupInfo.groupId"></td>
            <td v-text="courseGroupInfo.groupName"></td>
            <td v-text="courseGroupInfo.teacherId"></td>
            <td v-text="courseGroupInfo.teacherName"></td>
            <td v-text="courseGroupInfo.headman"></td>
            <td><button id="download" class="am-btn am-btn-success am-radius" @click="downloadClick">下载</button></td>
            <!--下载培养方案的按钮-->
            <td>
              <img id="adopt" src="./images/save.png" @click="examineTeachingPlanInfoClick(courseGroupInfo.teacherId,'1')">
              <img id="notAdopt" src="./images/restore.png" @click="examineTeachingPlanInfoClick(courseGroupInfo.teacherId,'0')">
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <modal v-model="modalOperateBool" width="400" id="modalBody">
        <div style="text-align: center;font-size: 1.1rem;">
          <p>是否确定{{operateMsg}}</p>
        </div>
        <div slot="footer" style="text-align: center">
          <button id="modalBtn" @click="operateOk">确定</button>
          <button id="modalBtn" @click="operateCancel">取消</button>
        </div>
      </modal>
      <modal v-model="modalResultBool" width="400" id="modalBody">
        <div style="text-align: center;font-size: 1.1rem;">
          <p v-if="resultmsg === '1'">{{operateMsg}}成功</p>
          <p v-else>{{operateMsg}}失败</p>
        </div>
        <div slot="footer" style="text-align: center">
          <button id="modalBtn" @click="resultOk">确定</button>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
              teacherinfoKey:{
                groupId:'0',
                teacherId:'0'
              },
              groupList:[
                {groupName:'护理组',groupId:'111'},
                {groupName:'西医组',groupId:'222'},
                {groupName:'临床组',groupId:'333'}
              ],
              teacherList:[
                {teacherName:'何平',teacherId:'111111'},
                {teacherName:'张继',teacherId:'222222'},
                {teacherName:'李伟',teacherId:'333333'}
              ],
              courseGroupInfos:[
                {groupName:'临床医学',groupId:'2017001',teacherName:'李伟',teacherId:'111', headman:'何平'},
                {groupName:'临床护理',groupId:'2017002',teacherName:'张亮',teacherId:'222',headman:'张扬'},
                {groupName:'护用药理',groupId:'2017003',teacherName:'邓常',teacherId:'333',headman:'李季'}
              ],
              msg:"",
              operateMsg:"",
              resultmsg:"1",
              modalOperateBool:false,
              modalResultBool:false,
              teacherIdEle:""
            }
        },
      beforeMount:function() {
        this.$http.post('./courseTeachPlan/findTeachPlan',{
          "groupId":"0",
          "teacherId":"0"
        },{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.courseGroupInfos = response.body.courseGroupInfos;
          this.groupList = response.body.groupList;
          this.teacherList = response.body.teacherList;
        },function(error){
          console.log("获取error");
        });
      },
      methods:{
        groupClick: function(){
          this.$http.post('./courseTeachPlan/getTeacherList',{
            "groupId":this.teacherinfoKey.groupId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.teacherList = response.body.teacherList;
          },function(error){
            console.log("获取error");
          });
          this.teacherinfoKey.teacherId = "0";
        },
        checkTeachingPlanInfoClick: function(){
          this.$http.post('./courseTeachPlan/findTeachPlan',{
            "groupId":this.teacherinfoKey.groupId,
            "teacherId":this.teacherinfoKey.teacherId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.courseGroupInfos = response.body.courseGroupInfos;
          },function(error){
            console.log("获取error");
          });
        },
        downloadClick:function(){
          location.href="./courseTeachPlan/exportExcel";
        },
        examineTeachingPlanInfoClick:function(teacherId,msg){
          this.modalOperateBool = true;
          this.teacherIdEle = teacherId;
          this.msg = msg;
          if(msg ==="1"){
            this.operateMsg = "审核通过";
          }else{
            this.operateMsg = "审核不通过";
          }
        },
        operateOk: function(){
          this.$http.post('./courseTeachPlan/doCheckTeachPlan',{
            "msg":this.msg,
            "teacherId":this.teacherIdEle
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            var resultmsg=response.body.result;
          },function(error){
            console.log("获取error");
          });
          this.modalOperateBool = false;
          this.modalResultBool = true;
        },
        operateCancel: function(){
          this.modalOperateBool = false;
        },
        resultOk: function(){
          this.modalResultBool = false;
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
    img{
      width: 2rem;
      height: 2rem;
      border: thin solid white;
    }
    img:hover{
      cursor: pointer;
      border: thin solid grey;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
