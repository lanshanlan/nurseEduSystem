<template>
    <div  id="staffAuthorityAll">
      <div id="dropdownStaff">
        <div >
          <table class="dropdownStaffTable" id="tchDropdownTable">
            <tr v-for="role in roleList">
              <td width="40%" v-text="role.roleName">督导</td>
              <td width="60%"><img id="tchModifyInfo" src="./images/edit.png"><img id="tchDeleteInfo" src="./images/delete.png"></td>
            </tr>
          </table>
        </div>
      </div>

      <div id="staffAuthority" class="marginLeft">
        <div>
          <p class="topP" id="topStaff">督导</p>
          <input type="checkbox" id="all" @click="allCheck()" style="margin-left: 3rem">
          <label for="all">全选</label>
          <ul>
            <li  v-for="tchAuthority in tchAuthoritys">
              <input type="checkbox" :id="tchAuthority.value" :value="tchAuthority.value" :checked="tchAuthority.checked" v-model="tchAuthorityNames">
              <label :for="tchAuthority.value">{{tchAuthority.output}}</label>
            </li>
          </ul>
        </div>
        <div id="buttonDiv">
          <span><button id="saveInf" class="bottomButton am-btn am-btn-success am-radius">保存</button></span>
          <span><button id="cancel" class="bottomButton am-btn am-btn-success am-radius">取消</button></span>
        </div>
      </div>
    </div>
</template>

<script>
  import arrowright from "./images/arrowright.png"
  import arrowdown from "./images/arrowdown.png"
    export default {
        name: '',
        data () {
            return {
              roleList:[
                {roleId:'12345',roleName:'教师'},
                {roleId:'12346',roleName:'督导'},
                {roleId:'12347',roleName:'教研组组长'}
              ],
              tchAuthorityNames:[],
              tchAuthoritys:[
                {value:'tch1',checked:false,output:'查看个人成绩'},
                {value:'tch2',checked:false,output:'查看全班成绩'},
                {value:'tch3',checked:true,output:'管理成绩（导入、更新、修改、提交成绩）'},
                {value:'tch4',checked:true,output:'管理教师个人信息'},
                {value:'tch5',checked:true,output:'班主任信息管理'},
                {value:'tch5',checked:true,output:'班主任信息管理'},
                {value:'tch6',checked:true,output:'班级信息管理'}
              ]
            }
        },
      methods:{
        allCheck: function(){
          if(this.tchAuthorityNames.length===this.tchAuthoritys.length){
            this.tchAuthorityNames=[];
          }
          else {
            this.tchAuthorityNames=[];
            for(var i=0;i<this.tchAuthoritys.length;i++){
              this.tchAuthorityNames.push(this.tchAuthoritys[i].value);
            }
          }
        }
//        用于多选框的全选或全不选，方法是对数组tchAuthorityNames进行操作，此数组用v-model绑定到了多选框上
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
      position: relative;
      width: 100%;
      height:2rem;
      border: 1px solid #d4d4d9;
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
