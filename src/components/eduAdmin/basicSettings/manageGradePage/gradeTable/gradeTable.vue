<template>
  <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
    <div id="gradeManagementDiv" style="background-color: white">
      <div id="fiveYearDiv" v-show="gradeManagement">
        <button class="amButtom" @click="fiveYearClick"><img id="fiveYearArrow" class="iconImg" :src="icon2"><span class="subtitle">{{firstYearType}}年制</span></button>
        <table id="fiveYearTable" v-show="fiveYearTable"  class="operationTable" style="table-layout: fixed;">
          <tr v-for="(fiveGrade,index) in fiveGrades" :id="'fiveInputTr'+index">
            <td><input class="gradeInput" type="text" :value="fiveGrade.gradeName + '级'" readonly="readonly"></td>
            <td><input class="gradeInput" type="text" :value="fiveGrade.studentNum + '人'" readonly="readonly"></td>
            <td class="checkGradeInfo" @click="checkGradeInfoClick(firstYearType,fiveGrade.gradeName)"><u>查看年级信息</u></td>
            <td>
              <img :id="'fiveEditImg'+index" src="./images/edit.png" @click="editGradeClick('five',index)">
              <img :id="'fiveSaveImg'+index" src="./images/save.png" style="display: none" @click="saveGradeClick('five',index)">
              <img :id="'fiveDeleteImg'+index" src="./images/delete.png" @click="deleteGradeClick(fiveGrades,index)">
              <img :id="'fiveRestoreImg'+index" src="./images/restore.png" style="display: none" @click="restoreGradeClick('five',index)">
            </td>
          </tr>
          <tr>
            <td><img :id="'fiveAddImg'+index" src="./images/add.png" @click="addGradeClick(fiveGrades)"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="threeYearDiv" v-show="gradeManagement">
        <button class="amButtom" @click="threeYearClick"><img id="threeYearArrow" class="iconImg" :src="icon1"><span class="subtitle">{{secondYearType}}年制</span></button>
        <table id="threeYearTable" v-show="threeYearTable"  class="operationTable" style="table-layout: fixed;">
          <tr v-for="(threeGrade,index) in threeGrades" :id="'threeInputTr'+index">
            <td><input class="gradeInput" type="text" :value="threeGrade.gradeName + '级'" readonly="readonly"></td>
            <td><input class="gradeInput" type="text" :value="threeGrade.studentNum + '人'" readonly="readonly"></td>
            <td class="checkGradeInfo" @click="checkGradeInfoClick(firstYearType,threeGrade.gradeName)"><u>查看年级信息</u></td>
            <td>
              <img :id="'threeEditImg'+index" src="./images/edit.png" @click="editGradeClick('three',index)">
              <img :id="'threeSaveImg'+index" src="./images/save.png" style="display: none" @click="saveGradeClick('three',index)">
              <img :id="'threeDeleteImg'+index" src="./images/delete.png" @click="deleteGradeClick(threeGrades,index)">
              <img :id="'threeRestoreImg'+index" src="./images/restore.png" style="display: none" @click="restoreGradeClick('three',index)">
            </td>
          </tr>
          <tr>
            <td><img :id="'threeAddImg'+index" src="./images/add.png" @click="addGradeClick(threeGrades)"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div v-show="gradeTable">
        <table id="gradeClassInfoDiv" class="operationTable" style="table-layout: fixed;">
          <thead>
          <tr>
            <th width="6rem">年级</th>
            <th width="6rem">专业名称</th>
            <th width="6rem">班级ID</th>
            <th width="6rem">班级名称</th>
            <th width="6rem">班主任ID</th>
            <th width="6rem">班主任姓名</th>
            <th width="6rem">学制</th>
            <th width="6rem">班级人数</th>
            <th width="6rem">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(classinfoStr,index) in classinfoStrList" :id="'inputTable'+index">
            <td><input id="input1" :value="classinfoStr.gradeName" readonly="readonly" style="border: none"></td>
            <td><input id="input2" :value="classinfoStr.specialityName" readonly="readonly" style="border: none"></td>
            <td><input id="input3" :value="classinfoStr.classId" readonly="readonly" style="border: none"></td>
            <td><input id="input4" :value="classinfoStr.className" readonly="readonly" style="border: none"></td>
            <td><input id="input5" :value="classinfoStr.classTeacherId" readonly="readonly" style="border: none"></td>
            <td><input id="input6" :value="classinfoStr.classTeacherName" readonly="readonly" style="border: none"></td>
            <td><input id="input7" :value="classinfoStr.schoolYearType" readonly="readonly" style="border: none"></td>
            <td><input id="input8" :value="classinfoStr.classSize" readonly="readonly" style="border: none"></td>
            <td>
              <img :id="'editImg'+index" class="btnImg" src="./images/edit.png" @click="editClick(index)">
              <img :id="'saveImg'+index" class="btnImg" src="./images/save.png" style="display: none" @click="saveClick(index)">
              <img :id="'deleteImg'+index" class="btnImg" src="./images/delete.png" @click="deleteClick(index)">
              <img :id="'restoreImg'+index" class="btnImg" src="./images/restore.png" style="display: none" @click="restoreClick(index)">
            </td>
          </tr>
          <tr>
            <td colspan="9"><img :id="'addImg'+index" class="imgLeft" src="./images/add.png" @click="addClick()"></td>
          </tr>
          </tbody>
        </table>
        <div id="buttonDiv">
          <span><button id="downloadForm" class="bottomButton am-btn am-btn-success am-radius" @click="">下载模板</button></span>
          <span><button id="leadIn" class="bottomButton am-btn am-btn-success am-radius" @click="">导入</button></span>
          <span><button id="leadOut" class="bottomButton am-btn am-btn-success am-radius" @click="">导出</button></span>
          <span><button id="goBack" class="bottomButton am-btn am-btn-success am-radius" @click="goBackClick()">返回</button></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import arrowright from "./images/arrowright.png"
  import arrowdown from "./images/arrowdown.png"
  export default {
    name: 'gradeManagementDiv',
    data () {
      return {
        firstYearType:'3',
        secondYearType:'5',
        icon1:arrowright,
        icon2:arrowdown,
        gradeManagement: true,
        fiveArrow: true,
        threeArrow: false,
        fiveYearTable: true,
        threeYearTable: false,
        gradeTable: false,
        fiveGrades: [
          { gradeName:"2014", studentNum:"167" },
          { gradeName:"2013", studentNum:"167" },
          { gradeName:"2012", studentNum:"167" }
        ],
        threeGrades: [
          { gradeName:"2016", studentNum:"167" },
          { gradeName:"2015", studentNum:"167" },
          { gradeName:"2014", studentNum:"167" }
        ],
        classinfoStrList:[
          {gradeName:'04',specialityName:'护理',classId:'03',className:'护理3班',classTeacherId:'12345',classTeacherName:'何平',schoolYearType:'五年制',classSize:'43'},
          {gradeName:'04',specialityName:'临床医学',classId:'05',className:'临床医学5班',classTeacherId:'23141',classTeacherName:'季军',schoolYearType:'五年制',classSize:'54'},
          {gradeName:'04',specialityName:'护理',classId:'01',className:'护理1班',classTeacherId:'54113',classTeacherName:'李磊',schoolYearType:'五年制',classSize:'31'}
        ]
      }
    },
    beforeMount:function() {
      this.$http.post('../gradeManageJson',{},{
        "Content-Type":"application/json"
      }).then(function (response) {
        console.log(response);
        this.firstYearType = response.body.yearList[0].yearType;
        this.secondYearType = response.body.yearList[1].yearType;
        this.fiveGrades = response.body.yearList[0].gradeList;
        this.threeGrades = response.body.yearList[1].gradeList;
      },function(error){
        console.log("获取error");
      });
    },
    methods: {
      fiveYearClick: function () {
        var fiveYearArrow = document.getElementById("fiveYearArrow");
        if (!this.fiveArrow) {
//              alert("open");
          this.fiveArrow = true;
          this.fiveYearTable = true;
          fiveYearArrow.src = this.icon2;
        } else {
//              alert("close");
          this.fiveArrow = false;
          this.fiveYearTable = false;
          fiveYearArrow.src = this.icon1;
        }
      },
      threeYearClick: function () {
        var threeYearArrow = document.getElementById("threeYearArrow");
        if (!this.threeArrow) {
//              alert("open");
          this.threeArrow = true;
          this.threeYearTable = true;
          threeYearArrow.src = this.icon2;
        } else {
//              alert("close");
          this.threeArrow = false;
          this.threeYearTable = false;
          threeYearArrow.src = this.icon1;
        }
      },
      editGradeClick: function(year,index){
        var inputTr = document.getElementById(year+"InputTr"+index);
        var input = inputTr.getElementsByTagName("input");
        var editImg = document.getElementById(year+"EditImg"+index);
        var saveImg = document.getElementById(year+"SaveImg"+index);
        var restoreImg = document.getElementById(year+"RestoreImg"+index);
        var deleteImg = document.getElementById(year+"DeleteImg"+index);
//          使课程信息的输入标签变为可输入，显示边框
        for(var i = 0;i<input.length;i++){
          input[i].readOnly = false;
          input[i].style.border = "0.1rem solid #d4d4d9";
        }
//        隐藏编辑和删除功能图标,显示保存和重置功能图标
        editImg.style.display = "none";
        saveImg.style.display = "inline";
        deleteImg.style.display = "none";
        restoreImg.style.display = "inline";
      },
      saveGradeClick: function(year,index){
        if(confirm("您确定提交保存该课程吗？")){
          var inputTr = document.getElementById(year+"InputTr"+index);
          var input = inputTr.getElementsByTagName("input");
          var editImg = document.getElementById(year+"EditImg"+index);
          var saveImg = document.getElementById(year+"SaveImg"+index);
          var restoreImg = document.getElementById(year+"RestoreImg"+index);
          var deleteImg = document.getElementById(year+"DeleteImg"+index);
          var i = null;
    //            保存数据到data,虽然input的value和data中的属性绑定,但并不是完成的双向,此时data中的属性数据并没有发生修改
          if(year == "five"){
            this.fiveGrades[index].name = input[0].value;
            this.fiveGrades[index].peopleNum = input[1].value;
            console.log(this.fiveCourses);
          }
          if(year == "three"){
            this.threeGrades[index].name = input[0].value;
            this.threeGrades[index].peopleNum = input[1].value;
          }
          for(i = 0;i<input.length;i++){
            input[i].readOnly = true;
            input[i].style.border = "none";
          }
    //          预留功能,将data提交到后端,实现保存数据,处理回调
          editImg.style.display = "inline";
          saveImg.style.display = "none";
          deleteImg.style.display = "inline";
          restoreImg.style.display = "none";
        }
      },
      restoreGradeClick: function(year,index){
        if(confirm("您确定取消编辑并重置该课程信息吗？")){
          var inputTr = document.getElementById(year+"InputTr"+index);
          var input = inputTr.getElementsByTagName("input");
          var editImg = document.getElementById(year+"EditImg"+index);
          var saveImg = document.getElementById(year+"SaveImg"+index);
          var restoreImg = document.getElementById(year+"RestoreImg"+index);
          var deleteImg = document.getElementById(year+"DeleteImg"+index);
          var i = null;
//            重置数据到value,虽然input的value和data中的属性绑定,但并不是完全的双向,此时data中的属性数据并没有发生修改
          if(year == "five"){
            input[0].value = this.fiveGrades[index].name;
            input[1].value = this.fiveGrades[index].peopleNum;
          }
          if(year == "three"){
            input[0].value = this.threeGrades[index].name;
            input[1].value = this.threeGrades[index].peopleNum;
          }
//          使课程信息的输入标签变为不可输入，隐藏边框
          for(i = 0;i<input.length;i++){
            input[i].readOnly = true;
            input[i].style.border = "none";
          }
          editImg.style.display = "inline";
          saveImg.style.display = "none";
          deleteImg.style.display = "inline";
          restoreImg.style.display = "none";
        }
      },
      deleteGradeClick: function(grades,index){
//          从data中的课程信息数组中删除
//          预留功能,将data提交到后端,实现删除数据,处理回调
        if(confirm("您确定删除该课程吗？")){
          grades.splice(index, 1);
        }
      },
      addGradeClick: function (grades,year){
        grades.push(
            { gradeName:"", studentNum:"" }
        );
      },
      checkGradeInfoClick: function(yearType,gradeName){
        this.$http.post('../seeGradeInfoJson',{},{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.classinfoStrList = response.body.classinfoStrList;
        },function(error){
          console.log("获取error");
        });
        this.gradeTable = true;
        this.gradeManagement = false;
      },
      goBackClick: function(){
        this.gradeTable = false;
        this.gradeManagement = true;
      },
      editClick: function(index){
        var inputTable = document.getElementById("inputTable"+index);
        var input = inputTable.getElementsByTagName("input");
        var p = inputTable.getElementsByTagName("p");
        var editImg = document.getElementById("editImg"+index);
        var saveImg = document.getElementById("saveImg"+index);
        var deleteImg = document.getElementById("deleteImg"+index);
        var restoreImg = document.getElementById("restoreImg"+index);
        var i = null;
        for(i = 0;i<input.length;i++){
          input[i].readOnly = false;
          input[i].style.border = "0.1rem solid #d4d4d9";
        }
        editImg.style.display = "none";
        saveImg.style.display = "inline";
        deleteImg.style.display = "none";
        restoreImg.style.display = "inline";
      },
      saveClick: function(index){
        var inputTable = document.getElementById("inputTable"+index);
        var input = inputTable.getElementsByTagName("input");
        var p = inputTable.getElementsByTagName("p");
        var editImg = document.getElementById("editImg"+index);
        var saveImg = document.getElementById("saveImg"+index);
        var deleteImg = document.getElementById("deleteImg"+index);
        var restoreImg = document.getElementById("restoreImg"+index);
        var i = null;
        for(i = 0;i<input.length;i++){
          input[i].readOnly = true;
          input[i].style.border = "none";
        }
        this.gradeClassInfos[index].gradeID = input[0].value;
        this.gradeClassInfos[index].majorName = input[1].value;
        this.gradeClassInfos[index].classID = input[2].value;
        this.gradeClassInfos[index].className = input[3].value;
        this.gradeClassInfos[index].classTchID = input[4].value;
        this.gradeClassInfos[index].classTchName = input[5].value;
        this.gradeClassInfos[index].yearPlan = input[6].value;
        this.gradeClassInfos[index].peopleNum = input[7].value;
        editImg.style.display = "inline";
        saveImg.style.display = "none";
        deleteImg.style.display = "inline";
        restoreImg.style.display = "none";
      },
      restoreClick: function(index){
        var inputTable = document.getElementById("inputTable"+index);
        var input = inputTable.getElementsByTagName("input");
        var p = inputTable.getElementsByTagName("p");
        var editImg = document.getElementById("editImg"+index);
        var saveImg = document.getElementById("saveImg"+index);
        var deleteImg = document.getElementById("deleteImg"+index);
        var restoreImg = document.getElementById("restoreImg"+index);
        var i = null;
        for(i = 0;i<input.length;i++){
          input[i].readOnly = true;
          input[i].style.border = "none";
        }
        input[0].value = this.gradeClassInfos[index].gradeID;
        input[1].value = this.gradeClassInfos[index].majorName;
        input[2].value = this.gradeClassInfos[index].classID;
        input[3].value = this.gradeClassInfos[index].className;
        input[4].value = this.gradeClassInfos[index].classTchID;
        input[5].value = this.gradeClassInfos[index].classTchName;
        input[6].value  = this.gradeClassInfos[index].yearPlan;
        input[7].value = this.gradeClassInfos[index].peopleNum;
        editImg.style.display = "inline";
        saveImg.style.display = "none";
        deleteImg.style.display = "inline";
        restoreImg.style.display = "none";
      },
      deleteClick: function(index){
        this.gradeClassInfos.splice(index,1);
      },
      addClick: function(){
        this.gradeClassInfos.push(
          { gradeID:"", majorName:"", className:"", classTchName:"",yearPlan:"",peopleNum:"" }
        );
      }
    }
  }
</script>

<style scoped>
  html {
  }
  .dropDown{
    margin: 0.5rem 5rem;
  }
  input{
    text-align: center;
    width: 80%;
  }
  .checkGradeInfo{
    color: #158064;
    cursor: pointer;
  }
  .checkGradeInfo:hover{
    color: black;
  }
  .bottomButton{
    margin-top: 1rem;
    margin-right: 1.4rem;
  }
  #buttonDiv{
    text-align: center;
  }
  .gradeInput{
    font-size: 0.5rem;
    width: 35%;
    border: none;
    outline: none;
  }
  img{
     position: relative;
     margin: 0.5rem 0.2rem;
     width: 1.5rem;
     height: 1.5rem
   }
  img:hover{
    cursor: pointer;
  }
  .btnImg{
    width: 2rem;
    height: 2rem;
    border: thin solid white;
  }
  .btnImg:hover{
    cursor: pointer;
    border: thin solid grey;
  }
  .imgLeft{
    float:left;
    margin-left: 5rem;
  }
  @media screen and (max-width: 1023px) {
    html {
    }
  }
</style>
