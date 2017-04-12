<template>
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
            <td><input id="input1" :value="stdInfo.stdID" style="display: none"><p id="p1" style="display: inline">{{stdInfo.stdID}}</p></td>
            <td><input id="input2" :value="stdInfo.name" style="display: none"><p id="p2" style="display: inline">{{stdInfo.name}}</p></td>
            <td><input id="input3" :value="stdInfo.idCard" style="display: none"><p id="p3" style="display: inline">{{stdInfo.idCard}}</p></td>
            <td><input id="input4" :value="stdInfo.sex" style="display: none"><p id="p4" style="display: inline">{{stdInfo.sex}}</p></td>
            <td><input id="input5" :value="stdInfo.yearPlan" style="display: none"><p id="p5" style="display: inline">{{stdInfo.yearPlan}}</p></td>
            <td><input id="input6" :value="stdInfo.gradeName" style="display: none"><p id="p6" style="display: inline">{{stdInfo.gradeName}}</p></td>
            <td><input id="input7" :value="stdInfo.majorName" style="display: none"><p id="p7" style="display: inline">{{stdInfo.majorName}}</p></td>
            <td><input id="input8" :value="stdInfo.className" style="display: none"><p id="p8" style="display: inline">{{stdInfo.className}}</p></td>
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
</template>

<script>
    export default {
        name: '',
        data () {
            return {
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
        editClick: function(index){
          var inputTable = document.getElementById("inputTable"+index);
          var input = inputTable.getElementsByTagName("input");
          var p = inputTable.getElementsByTagName("p");
          var editImg = document.getElementById("editImg"+index);
          var saveImg = document.getElementById("saveImg"+index);
          var deleteImg = document.getElementById("deleteImg"+index);
          var restoreImg = document.getElementById("restoreImg"+index);
          var i = null;
            input[7].style.display = "inline";
            input[7].style.border = "thin solid";
            p[7].style.display = "none";
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
            input[7].style.display = "none";
            input[7].style.border = "none";
            p[7].style.display = "inline";
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
          var i = null;
            input[7].style.display = "none";
            input[7].style.border = "none";
            p[7].style.display = "inline";
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
    input{
      width:100%;
    }
    p{
      font-size: 0.8rem;
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
