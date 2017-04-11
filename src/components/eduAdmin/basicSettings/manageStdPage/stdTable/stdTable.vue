<template>
    <div id="stdTable">
      <!--学生信息表格-->
      <table id="eduAdminStdTableSy" border="1">
        <thead>
        <tr>
          <th width="4rem">年级</th>
          <th width="4rem">姓名</th>
          <th width="4rem">性别</th>
          <th width="4rem">专业</th>
          <th width="8rem">学号</th>
          <th width="6rem">链接</th>
          <th width="4rem">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(stdInfo,index) in stdInfos" :id="'inputTable'+index">
          <td><input id="input1" :value="stdInfo.grade" style="display: none"><p id="p1" style="display: inline">{{stdInfo.grade}}</p></td>
          <td><input id="input2" :value="stdInfo.name" style="display: none"><p id="p2" style="display: inline">{{stdInfo.name}}</p></td>
          <td><input id="input3" :value="stdInfo.sex" style="display: none"><p id="p3" style="display: inline">{{stdInfo.sex}}</p></td>
          <td><input id="input4" :value="stdInfo.major" style="display: none"><p id="p4" style="display: inline">{{stdInfo.major}}</p></td>
          <td><input id="input5" :value="stdInfo.stdID" style="display: none"><p id="p5" style="display: inline">{{stdInfo.stdID}}</p></td>
          <td><input id="input6" :value="stdInfo.interlink" style="display: none"><p id="p6" style="display: inline">{{stdInfo.interlink}}</p></td>
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
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                stdInfos:[
                  {grade:'2013级',name:'高兴月',sex:'女',major:'护理学',stdID:'1530310503',interlink:'196.168.3.4'},
                  {grade:'2013级',name:'王明',sex:'男',major:'护理学',stdID:'1530310502',interlink:'196.168.3.3'},
                  {grade:'2013级',name:'张玲',sex:'女',major:'护理学',stdID:'1530310513',interlink:'196.168.3.2'}
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
          this.stdInfos[index].grade = input[0].value;
          this.stdInfos[index].name = input[1].value;
          this.stdInfos[index].sex = input[2].value;
          this.stdInfos[index].major = input[3].value;
          this.stdInfos[index].stdID = input[4].value;
          this.stdInfos[index].interlink = input[5].value;
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
          this.stdInfos.splice(index,1);
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #eduAdminStdTableSy{
      position: relative;
      margin: 2rem auto;
      width: 90%;
      border: 0 solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
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
