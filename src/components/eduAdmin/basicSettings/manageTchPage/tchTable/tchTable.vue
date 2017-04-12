<template>
  <div id="tchTable" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
    <!--教师信息表格-->
    <table id="eduAdminTchTableSy" class="operationTable" style="table-layout: fixed;">
      <!--table-layout: fixed;固定表格格局-->
      <thead>
      <tr>
        <th>教师工号</th>
        <th>姓名</th>
        <th>身份证号</th>
        <th>性别</th>
        <th>手机号码</th>
        <th>聘用校区</th>
        <th>工作职称</th>
        <th>工作职务</th>
        <th>教师类型</th>
        <th>所属教研组</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(tchInfo,index) in tchInfos" :id="'inputTable'+index">
        <td><input id="input1" :value="tchInfo.tchID" style="display: none"><p id="p1" style="display: inline">{{tchInfo.tchID}}</p></td>
        <td><input id="input2" :value="tchInfo.name" style="display: none"><p id="p2" style="display: inline">{{tchInfo.name}}</p></td>
        <td><input id="input3" :value="tchInfo.idCard" style="display: none"><p id="p3" style="display: inline">{{tchInfo.idCard}}</p></td>
        <td><input id="input4" :value="tchInfo.sex" style="display: none"><p id="p4" style="display: inline">{{tchInfo.sex}}</p></td>
        <td><input id="input5" :value="tchInfo.phoneNum" style="display: none"><p id="p5" style="display: inline">{{tchInfo.phoneNum}}</p></td>
        <td><input id="input6" :value="tchInfo.employCampus" style="display: none"><p id="p6" style="display: inline">{{tchInfo.employCampus}}</p></td>
        <td><input id="input7" :value="tchInfo.proRanks" style="display: none"><p id="p7" style="display: inline">{{tchInfo.proRanks}}</p></td>
        <td><input id="input8" :value="tchInfo.duties" style="display: none"><p id="p8" style="display: inline">{{tchInfo.duties}}</p></td>
        <td><input id="input9" :value="tchInfo.tchType" style="display: none"><p id="p9" style="display: inline">{{tchInfo.tchType}}</p></td>
        <td><input id="input10" :value="tchInfo.tchGroup" style="display: none"><p id="p10" style="display: inline">{{tchInfo.tchGroup}}</p></td>
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
                  {tchID:'1234567',name:'何平',idCard:'321281199503285555',sex:'男',phoneNum:'15680991111',employCampus:'西校区',proRanks:'教授',duties:'教导主任',tchType:'教师',tchGroup:'护理组'},
                  {tchID:'1234568',name:'王建',idCard:'321281199503286666',sex:'男',phoneNum:'15680992222',employCampus:'西校区',proRanks:'副教授',duties:'教师',tchType:'教师',tchGroup:'护理组'},
                  {tchID:'1234569',name:'张小山',idCard:'321281199503287777',sex:'男',phoneNum:'15680993333',employCampus:'西校区',proRanks:'副教授',duties:'年级主任',tchType:'教师',tchGroup:'护理组'}
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
          for(i = 5;i<9;i++){
            input[i].style.display = "inline";
            input[i].style.border = "thin solid";
          }
          for(i = 5;i<9;i++){
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
          for(i = 5;i<9;i++){
            input[i].style.display = "none";
            input[i].style.border = "none";
          }
          for(i = 5;i<9;i++){
            p[i].style.display = "inline";
          }
          this.tchInfos[index].employCampus = input[5].value;
          this.tchInfos[index].proRanks = input[6].value;
          this.tchInfos[index].duties = input[7].value;
          this.tchInfos[index].tchType = input[8].value;
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
          for(i = 5;i<9;i++){
            input[i].style.display = "none";
            input[i].style.border = "none";
          }
          for(i = 5;i<9;i++){
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
    input{
      width: 100%;
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
