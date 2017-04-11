<template>
  <div id="tchTable">
    <!--教师信息表格-->
    <table id="eduAdminTchTableSy" border="1">
      <thead>
      <tr>
        <th width="4rem">教师姓名</th>
        <th width="4rem">性别</th>
        <th width="4rem">职称</th>
        <th width="8rem">编号</th>
        <th width="6rem">链接</th>
        <th width="4rem">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(tchInfo,index) in tchInfos" :id="'inputTable'+index">
        <td><input id="input1" :value="tchInfo.name" style="display: none"><p id="p1" style="display: inline">{{tchInfo.name}}</p></td>
        <td><input id="input2" :value="tchInfo.sex" style="display: none"><p id="p2" style="display: inline">{{tchInfo.sex}}</p></td>
        <td><input id="input3" :value="tchInfo.proRank" style="display: none"><p id="p3" style="display: inline">{{tchInfo.proRank}}</p></td>
        <td><input id="input4" :value="tchInfo.tchID" style="display: none"><p id="p4" style="display: inline">{{tchInfo.tchID}}</p></td>
        <td><input id="input5" :value="tchInfo.interlink" style="display: none"><p id="p5" style="display: inline">{{tchInfo.interlink}}</p></td>
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
                tchInfos:[
                  {name:'何平',sex:'男',proRank:'副教授',tchID:'1234567',interlink:'192.168.3.4'},
                  {name:'王建',sex:'男',proRank:'副教授',tchID:'1234567',interlink:'192.168.3.4'},
                  {name:'张小山',sex:'男',proRank:'副教授',tchID:'1234567',interlink:'192.168.3.4'}
                ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.tchInfos = response.body.tchInfos;
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
          this.tchInfos[index].name = input[0].value;
          this.tchInfos[index].sex = input[1].value;
          this.tchInfos[index].proRank = input[2].value;
          this.tchInfos[index].tchID = input[3].value;
          this.tchInfos[index].interlink = input[4].value;
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
          this.tchInfos.splice(index,1);
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #eduAdminTchTableSy{
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
