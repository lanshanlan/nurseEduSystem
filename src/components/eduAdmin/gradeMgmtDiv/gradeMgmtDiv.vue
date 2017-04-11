<template>
  <div id="gradeManagementDiv">
    <div id="fiveYearDiv" v-show="gradeManagement">
      <button class="yearButton" @click="fiveYearClick"><p id="fiveYearArrow" class="arrowOpen">.</p>五年制</button>
      <table id="fiveYearTable" v-show="fiveYearTable" border="1">
        <tr v-for="fiveGrade in fiveGrades">
          <td>{{ fiveGrade.name }}</td>
          <td>{{ fiveGrade.peopleNum }}</td>
          <td class="checkGradeInfo" @click="checkGradeInfoClick(fiveGrade.name ,fiveGrade.peopleNum)"><u>查看年级信息</u></td>
        </tr>
      </table>
    </div>
    <div id="threeYearDiv" v-show="gradeManagement">
      <button class="yearButton" @click="threeYearClick"><p id="threeYearArrow" class="arrowClose">.</p>三年制</button>
      <table id="threeYearTable" v-show="threeYearTable" border="1">
        <tr v-for="threeGrade in threeGrades">
          <td>{{ threeGrade.name }}</td>
          <td>{{ threeGrade.peopleNum }}</td>
          <td class="checkGradeInfo" @click="checkGradeInfoClick(threeGrade.name ,threeGrade.peopleNum)"><u>查看年级信息</u></td>
        </tr>
      </table>
    </div>
    <div v-show="gradeTable">
      <table id="gradeClassInfoDiv" border="1">
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
        <tr v-for="(gradeClassInfo,index) in gradeClassInfos" :id="'inputTable'+index">
          <td><input id="input1" :value="gradeClassInfo.gradeID" style="display: none"><p id="p1" style="display: inline">{{gradeClassInfo.gradeID}}</p></td>
          <td><input id="input2" :value="gradeClassInfo.majorName" style="display: none"><p id="p2" style="display: inline">{{gradeClassInfo.majorName}}</p></td>
          <td><input id="input3" :value="gradeClassInfo.classID" style="display: none"><p id="p3" style="display: inline">{{gradeClassInfo.classID}}</p></td>
          <td><input id="input4" :value="gradeClassInfo.className" style="display: none"><p id="p4" style="display: inline">{{gradeClassInfo.className}}</p></td>
          <td><input id="input5" :value="gradeClassInfo.classTchID" style="display: none"><p id="p5" style="display: inline">{{gradeClassInfo.classTchID}}</p></td>
          <td><input id="input6" :value="gradeClassInfo.classTchName" style="display: none"><p id="p6" style="display: inline">{{gradeClassInfo.classTchName}}</p></td>
          <td><input id="input7" :value="gradeClassInfo.yearPlan" style="display: none"><p id="p7" style="display: inline">{{gradeClassInfo.yearPlan}}</p></td>
          <td><input id="input8" :value="gradeClassInfo.peopleNum" style="display: none"><p id="p8" style="display: inline">{{gradeClassInfo.peopleNum}}</p></td>
          <td>
            <img :id="'editImg'+index" src="./images/edit.png" @click="editClick(index)">
            <img :id="'saveImg'+index" src="./images/save.png" style="display: none" @click="saveClick(index)">
            <img :id="'deleteImg'+index" src="./images/delete.png" @click="deleteClick(index)">
            <img :id="'restoreImg'+index" src="./images/restore.png" style="display: none" @click="restoreClick(index)">
          </td>
        </tr>
        <tr>
          <td colspan="9"><img :id="'addImg'+index" class="imgLeft" src="./images/add.png" @click="addClick()"></td>
        </tr>
        </tbody>
      </table>
      <span><button id="goBack" class="bottomButton" @click="goBackClick()">返回</button></span>
      <span><button id="leadOut" class="bottomButton" @click="">导出</button></span>
      <span><button id="leadIn" class="bottomButton" @click="">导入</button></span>
      <span><button id="downloadForm" class="bottomButton" @click="">下载模板</button></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gradeManagementDiv',
    data () {
      return {
        gradeManagement: true,
        fiveArrow: true,
        threeArrow: false,
        fiveYearTable: true,
        threeYearTable: false,
        gradeTable: false,
        fiveGrades: [
          { name:"2016级", peopleNum:"167", informationUrl:"" },
          { name:"2015级", peopleNum:"167", informationUrl:"" },
          { name:"2014级", peopleNum:"167", informationUrl:"" },
          { name:"2013级", peopleNum:"167", informationUrl:"" },
          { name:"2012级", peopleNum:"167", informationUrl:"" }
        ],
        threeGrades: [
          { name:"2016级", peopleNum:"167", informationUrl:"" },
          { name:"2015级", peopleNum:"167", informationUrl:"" },
          { name:"2014级", peopleNum:"167", informationUrl:"" }
        ],
        gradeClassInfos:[
          {gradeID:'04',majorId:'221',majorName:'护理',classID:'03',className:'护理3班',classTchID:'12345',classTchName:'何平',yearPlan:'五年制',peopleNum:'43'},
          {gradeID:'04',majorId:'231',majorName:'临床医学',classID:'05',className:'临床医学5班',classTchID:'23141',classTchName:'季军',yearPlan:'五年制',peopleNum:'54'},
          {gradeID:'04',majorId:'123',majorName:'护理',classID:'01',className:'护理1班',classTchID:'54113',classTchName:'李磊',yearPlan:'五年制',peopleNum:'31'}
        ]
      }
    },
    methods: {
      fiveYearClick: function () {
        var fiveYearArrow = document.getElementById("fiveYearArrow");
        if (!this.fiveArrow) {
//              alert("open");
          this.fiveArrow = true;
          this.fiveYearTable = true;
          fiveYearArrow.className = "arrowOpen";
        } else {
//              alert("close");
          this.fiveArrow = false;
          this.fiveYearTable = false;
          fiveYearArrow.className = "arrowClose";
        }
      },
      threeYearClick: function () {
        var threeYearArrow = document.getElementById("threeYearArrow");
        if (!this.threeArrow) {
//              alert("open");
          this.threeArrow = true;
          this.threeYearTable = true;
          threeYearArrow.className = "arrowOpen";
        } else {
//              alert("close");
          this.threeArrow = false;
          this.threeYearTable = false;
          threeYearArrow.className = "arrowClose";
        }
      },
      checkGradeInfoClick: function(name,peopleNum){
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
          input[i].style.display = "inline";
          input[i].style.border = "thin solid";
        }
        for(i = 0;i<input.length;i++){
          p[i].style.display = "none";
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
          input[i].style.display = "none";
          input[i].style.border = "none";
        }
        for(i = 0;i<input.length;i++){
          p[i].style.display = "inline";
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
          input[i].style.display = "none";
          input[i].style.border = "none";
        }
        for(i = 0;i<input.length;i++){
          p[i].style.display = "inline";
        }
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
  #gradeManagementDiv{
    margin: 1.5rem auto;
    background-color: white;
    width: 90%;
  }
  .yearButton{
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    outline: none;
    background-color: #37937A;
    border: thin solid #37937A;
    margin: 0.1rem;
    color: white;
  }
  .yearButton:hover{
    cursor: pointer;
  }
  .arrowClose{
    border-bottom: solid #116D54;
    border-right: solid #116D54;
    width: 1rem;
    height: 1rem;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);/* IE 9 */
    -webkit-transform: rotate(-45deg);/* Safari and Chrome */
    -o-transform: rotate(-45deg);/* Opera */
    -moz-transform: rotate(-45deg);/* Firefox */
    margin: 0.5rem;
    color: #37937A;
    /*position: relative;*/
    /*bottom: 0.3rem;*/
  }
  .arrowOpen{
    border-bottom: solid #116D54;
    border-right: solid #116D54;
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);/* IE 9 */
    -webkit-transform: rotate(45deg);/* Safari and Chrome */
    -o-transform: rotate(45deg);/* Opera */
    -moz-transform: rotate(45deg);/* Firefox */
    margin: 0.5rem;
    color: #37937A;
    /*position: relative;*/
    /*bottom: 0.3rem;*/
  }
  table{
    position: relative;
    width: 100%;
    border: 0 solid #d4d4d9;
    border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
  }
  th,td{
    border-bottom: thin solid #E3E3E3;
    height: 2.5rem;
    text-align: center;
  }
  input{
    outline:none;
    border: none;
    text-align: center;
    font-size: 1rem;
    width: 100%;
  }
  p{
    font-size: 1rem;
    text-align: center;
  }
  .checkGradeInfo{
    color: #158064;
    cursor: pointer;
  }
  .checkGradeInfo:hover{
    color: black;
  }
  .bottomButton{
    margin-top: 2.5rem;
    margin-right: 3rem;
    float: right;
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
  .bottomButton:hover{
    background-color: #00a539;
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
  .imgLeft{
    float:left;
    margin-left: 5rem;
  }
  @media screen and (max-width: 1023px) {
    html {
    }
  }
</style>
