<template>
    <div  id="staffAuthorityAll">
      <div id="dropdownStaff">
        <div>
          <p class="topP">职务</p>
          <table class="dropdownStaffTable" id="tchDropdownTable">
            <tr v-for="(role,index) in roleEleList">
              <td><input :id="'roleNameInput'+index" class="inputWM" v-model="role.roleName" readonly="readonly" style="border: none"@click="checkStaffAuthorityClick(index)"></td>
              <!--<td width="50%" v-text="role.roleName" @click="checkStaffAuthorityClick(role.roleId)"></td>-->
              <td>
                <img :id="'editImg'+index" src="./images/edit.png" @click="editClick(index)">
                <img :id="'saveImg'+index" src="./images/save.png" style="display: none" @click="saveClick(index)">
                <img :id="'deleteImg'+index" src="./images/delete.png" @click="deleteClick(index)">
                <img :id="'restoreImg'+index" src="./images/restore.png" style="display: none" @click="restoreClick(index)">
              </td>
            </tr>
            <tr>
              <td width="30%"><img :id="AddImg" src="./images/add.png" @click="addClick()"></td>
              <td width="70%"></td>
            </tr>
          </table>
          <!--角色名设置，修改，删除和添加组件-->
        </div>
        <div>
          <modal v-model="modalNameOperateBool" width="400" id="modalBody">
            <div style="text-align: center;font-size: 1.1rem;">
              <p v-if="operateNameMsg==='1'">是否确定保存修改</p>
              <p v-else-if="operateNameMsg==='2'">是否确定取消修改</p>
              <p v-else>是否确定删除</p>
            </div>
            <div slot="footer" style="text-align: center">
              <button v-if="operateNameMsg==='1'" id="modalBtn" @click="saveNameOk()">确定</button>
              <button v-else-if="operateNameMsg==='2'" id="modalBtn" @click="cancelNameOk()">确定</button>
              <button v-else id="modalBtn" @click="deleteNameOk()">确定</button>
              <button id="modalBtn" @click="operateNameCancel">取消</button>
            </div>
          </modal>
          <modal v-model="modalNameResultBool" width="400" id="modalBody">
            <div style="text-align: center;font-size: 1.1rem;">
              <p v-if="operateNameMsg === '1'">保存修改失败</p>
              <p v-else-if="operateNameMsg === '3'">删除失败</p>
              <p v-else>添加新角色失败</p>
            </div>
            <div slot="footer" style="text-align: center">
              <button id="modalBtn" @click="resultNameOk">确定</button>
            </div>
          </modal>
        </div>
      </div>

      <div id="staffAuthority" class="marginLeft">
        <div>
          <p class="topP" id="topStaff">{{roleNameEle}}</p>
          <input type="checkbox" id="all" @click="allCheck()" style="margin-left: 3rem">
          <label for="all">全选</label>
          <ul>
            <li  v-for="authorityEle in authorityList">
              <input type="checkbox" :id="authorityEle.authorityId" :value="authorityEle.authorityId" v-model="authorityIdList">
              <label :for="authorityEle.authorityId">{{authorityEle.authorityName}}</label>
            </li>
          </ul>
        </div>
        <!--权限修改div-->
        <div id="buttonDiv">
          <span><button id="saveInf" class="bottomButton am-btn am-btn-success am-radius" @click="saveAuthorityClick()">保存</button></span>
          <span><button id="cancel" class="bottomButton am-btn am-btn-success am-radius" @click="restoreAuthorityClick()">取消</button></span>
        </div>
        <!--权限修改提交或取消按钮-->
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
              roleIdEle:'',
              roleNameEle:'请选择职务',
              newRoleName:"未命名角色",
              newRoleId:'',
              index:'',
              modalNameOperateBool:false,
              modalNameResultBool:false,
              operateNameMsg:'',
              roleEleList:[
                {roleId:'12345',roleName:'教师'},
                {roleId:'12346',roleName:'督导'},
                {roleId:'12347',roleName:'教研组组长'}
              ],
              roleList:[
                {roleId:'12345',roleName:'教师'},
                {roleId:'12346',roleName:'督导'},
                {roleId:'12347',roleName:'教研组组长'}
              ],
              authorityIdList:['1','4'],
              authorityList:[
                {authorityId:'1',authorityName:'查看个人成绩'},
                {authorityId:'2',authorityName:'查看全班成绩'},
                {authorityId:'3',authorityName:'管理成绩（导入、更新、修改、提交成绩）'},
                {authorityId:'4',authorityName:'管理教师个人信息'},
                {authorityId:'5',authorityName:'班主任信息管理'},
                {authorityId:'6',authorityName:'班主任信息修改'},
                {authorityId:'7',authorityName:'班级信息管理'}
              ]
            }
        },
      beforeMount:function() {
        this.$http.post('./getAllRoleAuthority',{},{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.roleList = response.body.getAllRoleAuthorityList.roleList;
          this.roleEleList = response.body.getAllRoleAuthorityList.roleList;
          this.authorityList = response.body.getAllRoleAuthorityList.authorityList;
        },function(error){
          console.log("获取error");
        });
      },

      methods:{
        editClick: function(index){
          var roleNameInput = document.getElementById("roleNameInput"+index);
          var editImg = document.getElementById("editImg"+index);
          var saveImg = document.getElementById("saveImg"+index);
          var deleteImg = document.getElementById("deleteImg"+index);
          var restoreImg = document.getElementById("restoreImg"+index);
          roleNameInput.readOnly = false;
          roleNameInput.style.border = "0.1rem solid #d4d4d9";
          editImg.style.display = "none";
          saveImg.style.display = "inline";
          deleteImg.style.display = "none";
          restoreImg.style.display = "inline";
        },
        saveClick:function(index){
          this.modalNameOperateBool = true;
          this.operateNameMsg = "1";
          this.index = index;
        },
//      保存修改时，弹窗提醒用户确认
        restoreClick:function(index){
          this.modalNameOperateBool = true;
          this.operateNameMsg = "2";
          this.index = index;
        },
//      取消修改时，弹窗提醒用户确认
        deleteClick:function(index){
          this.modalNameOperateBool = true;
          this.operateNameMsg = "3";
          this.index = index;
        },
//      删除班级时，弹窗提醒用户确认
        saveNameOk: function(){
          var roleNameInput = document.getElementById("roleNameInput"+this.index);
          var editImg = document.getElementById("editImg"+this.index);
          var saveImg = document.getElementById("saveImg"+this.index);
          var deleteImg = document.getElementById("deleteImg"+this.index);
          var restoreImg = document.getElementById("restoreImg"+this.index);
          this.$http.post('./saveNewRole',{
            "roleId":this.roleEleList[this.index].roleId,
            "roleName":this.roleEleList[this.index].roleName
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            var saveResult = response.body.result;
            if(saveResult == '1'){
              this.$Message.success("保存成功！");
              roleNameInput.readOnly = true;
//            true或false不可用引号
              roleNameInput.style.border = "none";
              this.roleList[this.index].roleName = this.roleEleList[this.index].roleName;
              editImg.style.display = "inline";
              saveImg.style.display = "none";
              deleteImg.style.display = "inline";
              restoreImg.style.display = "none";
            }else{
              this.modalNameResultBool = true;
            }
          },function(error){
            console.log("获取error");
          });
          this.modalNameOperateBool = false;
        },
        cancelNameOk: function(){
          var roleNameInput = document.getElementById("roleNameInput"+this.index);
          var editImg = document.getElementById("editImg"+this.index);
          var saveImg = document.getElementById("saveImg"+this.index);
          var deleteImg = document.getElementById("deleteImg"+this.index);
          var restoreImg = document.getElementById("restoreImg"+this.index);
          this.modalNameOperateBool = false;
          roleNameInput.readOnly = true;
          roleNameInput.style.border = "none";
          this.roleEleList[this.index].roleName = this.roleList[this.index].roleName;
          editImg.style.display = "inline";
          saveImg.style.display = "none";
          deleteImg.style.display = "inline";
          restoreImg.style.display = "none";
        },
        deleteNameOk: function(){
          this.$http.post('./deleteRole',{
            "roleId":this.roleList[this.index].roleId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            var deleteResult = response.body.result;
            if(deleteResult == '1'){
              this.$Message.success("删除成功！");
              this.roleList.splice(this.index,1);
              this.roleEleList.splice(this.index,1);
            }else{
              this.modalNameResultBool = true;
            }
          },function(error){
            console.log("获取error");
          });
          this.modalNameOperateBool = false;
        },
        operateNameCancel:function(){
          this.modalNameOperateBool = false;
        },
//      取消保存，删除，取消保存等操作
        resultNameOk: function(){
          this.modalNameResultBool = false;
        },
//      弹窗让用户确认操作失败信息
        addClick: function(){
          this.$http.post('./addNewRole',{},{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.newRoleId = response.body.addNewRoleList.roleId;
            var addResult = response.body.addNewRoleList.result;
            if(addResult == "1"){
              this.roleList.push(
                {roleId:"a",roleName:"a"}
              );
              this.roleEleList.push(
                {roleId:this.newRoleId,roleName:this.newRoleName}
              );
              this.roleNameEle = this.newRoleName;
              console.log(this.roleEleList);
              console.log(this.roleList);
            }else{
              this.modalAddResultBool = true;
            }
          },function(error){
            console.log("获取error");
          });
        },
        allCheck: function(){
          if(this.authorityIdList.length===this.authorityList.length){
            this.authorityIdList=[];
          }
          else {
            this.authorityIdList=[];
            for(var i=0;i<this.authorityList.length;i++){
              this.authorityIdList.push(this.authorityList[i].authorityId);
            }
          }
        },
//        用于多选框的全选或全不选，方法是对数组tchAuthorityNames进行操作，此数组用v-model绑定到了多选框上
        checkStaffAuthorityClick: function(index){
          this.$http.post('./getRoleAuthority',{
            "roleId":this.roleList[index].roleId
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.authorityIdList = response.body.getRoleAuthorityList.authorityIdList;
          },function(error){
            console.log("获取error");
          });
          this.roleIdEle = this.roleList[index].roleId;
          this.roleNameEle = this.roleList[index].roleName;
        },
        saveAuthorityClick: function(){
          this.$http.post('./setRoleAuthority',{
            "roleId":this.roleIdEle,
            "authorityIdList":this.authorityIdList
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
          },function(error){
            console.log("获取error");
          });
        },
        restoreAuthorityClick: function(){
          this.$http.post('./getRoleAuthority',{
            "roleId":this.roleIdEle
          },{
            "Content-Type":"application/json"
          }).then(function (response) {
            console.log(response);
            this.authorityIdList = response.body.getRoleAuthorityList.authorityIdList;
          },function(error){
            console.log("获取error");
          });
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #staffAuthorityAll{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: 2rem auto 2rem 5rem;
      min-height: 50rem;
    }
    .marginLeft{
      margin-left: 3rem;
    }
    .blank{
      height: 2.9rem;
    }
    #dropdownStaff{
      width: 25rem;
      min-height: 30rem;
      border: 2px solid #d4d4d9;
    }
    img{
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
      border: thin solid white;
    }
    img:hover{
      cursor: pointer;
      border: thin solid grey;
    }
    .dropdownStaffTable{
      width: 100%;
      height:2rem;
      border-bottom: 1px solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }
    #staffAuthority{
      width: 45rem;
      min-height: 30rem;
      border: 2px solid #d4d4d9;
    }
    .topP{
      font-size: 1.5rem;
      margin-top: 0;
      padding: 1rem 3rem 1rem;
      border-bottom: 2px solid #158064;
    }
    .inputWM{
      width:80%;
      text-align: center;
      cursor: pointer;
      color: #158064;
    }
    .inputWM:hover{
      color: black;
    }
    ul li{
      float: left;
      min-height: 2rem;
      font-size: 0.6rem;
      width: 33%;
    }
    .bottomButton{
      margin-right: 1.4rem;
    }
    #buttonDiv{
      margin-top: 1rem;
      text-align: center;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
