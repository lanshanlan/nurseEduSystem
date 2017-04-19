<template>
    <div>
      <div id="dropdownInfo">
        <select class="selectWM" v-model="selected">
          <option value="0">选择年制</option>
          <option value="year" v-for="year in years">{{year}}</option>
        </select>
        <!--年制选择下拉列表-->
        <select class="selectWM">
          <option value="2">选择年级</option>
          <option v-for="three_grade in three_grades" :value="three_grade">{{three_grade}}</option>
        </select>
        <!--年级选择下拉列表-->
        <select class="selectWM">
          <option disabled selected>选择班级</option>
          <option v-for="clacc in claccs">{{clacc}}</option>
        </select>
        <!--班级选择下拉列表-->
        <span><input type="text" id="stdID" class="inputWM" placeholder="请输入学号"></span>
        <span><button id="downloadForm" class="am-btn am-btn-success am-radius buttonWM" @click="moli">下载模板</button></span>
        <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查找</button></span>
        <span><button id="leadIn" class="am-btn am-btn-success am-radius buttonWM">导入</button></span>
        <span><button id="leadOut" class="am-btn am-btn-success am-radius buttonWM">导出</button></span>
      </div>
      <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
        <div id="stdTable" style="background-color: white">
          <!--学生信息表格-->
          <table id="eduAdminStdTableSy" class="operationTable" style="table-layout: fixed;">
            <!--table-layout: fixed;固定表格格局-->
            <!--margin:0 1%;-->
            <thead>
            <tr>
              <th>学号</th>
              <th>姓名</th>
              <th>身份证号码</th>
              <th>性别</th>
              <th>学制</th>
              <th>年级</th>
              <th>专业</th>
              <th>班级</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(stdInfo,index) in stdInfos" :id="'inputTable'+index">
              <td><input id="input1" :value="stdInfo.stdID" readonly="readonly" style="border: none"></td>
              <td><input id="input2" :value="stdInfo.name" readonly="readonly" style="border: none"></td>
              <td><input id="input3" :value="stdInfo.idCard" readonly="readonly" style="border: none"></td>
              <td><input id="input4" :value="stdInfo.sex" readonly="readonly" style="border: none"></td>
              <td><input id="input5" :value="stdInfo.yearPlan" readonly="readonly" style="border: none"></td>
              <td><input id="input6" :value="stdInfo.gradeName" readonly="readonly" style="border: none"></td>
              <td><input id="input7" :value="stdInfo.majorName" readonly="readonly" style="border: none"></td>
              <td><input id="input8" :value="stdInfo.className" readonly="readonly" style="border: none"></td>
              <td>
                <img :id="'editImg'+index" src="./images/edit.png" @click="editClick(index)">
                <img :id="'saveImg'+index" src="./images/save.png" style="display: none" @click="saveClick(index)">
                <img :id="'deleteImg'+index" src="./images/delete.png" @click="deleteClick(index)">
                <img :id="'restoreImg'+index" src="./images/restore.png" style="display: none" @click="restoreClick(index)">
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
              selected:'0',
              years:[
                '三年制',
                '五年制'
              ],
              three_grades:[
                '一年级',
                '二年级',
                '三年级'
              ],
              five_grades:[
                '一年级',
                '二年级',
                '三年级',
                '四年级',
                '五年级'
              ],
              claccs:[
                '一班',
                '二班',
                '三班',
                '四班'
              ],
                stdInfos:[
                  {stdID:'1530310503',name:'高兴月',idCard:'321281199503281111',sex:'女',yearPlan:'五年制',gradeName:'2013级',majorName:'护理',className:'护理3班'},
                  {stdID:'1530310502',name:'王明',idCard:'321281199503282222',sex:'男',yearPlan:'三年制',gradeName:'2013级',majorName:'护理',className:'护理2班'},
                  {stdID:'1530310513',name:'张玲',idCard:'321281199503283333',sex:'女',yearPlan:'五年制',gradeName:'2013级',majorName:'养生',className:'养生3班'}
                ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.stdInfos = response.body.stdInfos;
        });
      },
      methods:{
        moli:function(){
          alert(this.aaa);
        },

        editClick: function(index){
          var inputTable = document.getElementById("inputTable"+index);
          var input = inputTable.getElementsByTagName("input");
          var p = inputTable.getElementsByTagName("p");
          var editImg = document.getElementById("editImg"+index);
          var saveImg = document.getElementById("saveImg"+index);
          var deleteImg = document.getElementById("deleteImg"+index);
          var restoreImg = document.getElementById("restoreImg"+index);
            input[7].readOnly = false;
            input[7].style.border = "0.1rem solid #d4d4d9";
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
          input[7].readOnly = true;
//          true或false不可用引号
          input[7].style.border = "none";
          this.stdInfos[index].classname = input[7].value;
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
          input[7].readOnly = true;
          input[7].style.border = "none";
          input[7].value = this.stdInfos[index].classname;
          editImg.style.display = "inline";
          saveImg.style.display = "none";
          deleteImg.style.display = "inline";
          restoreImg.style.display = "none";
        },
        deleteClick: function(index){
          this.stdInfos.splice(index,1);
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #dropdownInfo{
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
      text-align: left;
    }
    .buttonWM{
      width: 5.6rem;
      margin: 0 0.7rem;
    }
    input{
      width:80%;
      text-align: center;
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
