<template>
    <div id="dropdownStaff">
      <div id="tchDiv">
        <!--五年制课程表格模块下拉菜单-->
        <span><img id="tchArrow" class="dropdownImg" @click="tchSlideToggle()" :src="tchArrow"></span>
        <span class="dropdownP" @click="tchSlideToggle()">教师</span>
      </div>
      <div>
        <table class="dropdownStaffTableSy" id="tchDropdownTable" v-show="tchDropdownTable">
          <tr>
            <td width="40%">督导</td>
            <td width="60%"><img id="tchModifyInfo" class="downImg" src="./images/edit.png"><img id="tchDeleteInfo" class="downImg" src="./images/delete.png"></td>
          </tr>
        </table>
      </div>
      <div id="eduAdminDiv">
        <!--五年制课程表格模块下拉菜单-->
        <span><img id="eduAdminArrow" class="dropdownImg" @click="eduAdminSlideToggle()" :src="eduAdminArrow"></span>
        <span class="dropdownP" @click="eduAdminSlideToggle()">教务</span>
      </div>
      <div>
        <table class="dropdownStaffTableSy" id="eduAdimnDropdownTable" v-show="eduAdminDropdownTable">
          <tr>
            <td width="40%">教务管理员</td>
            <td width="60%"><img id="edudminModifyInfo" class="downImg" src="./images/edit.png"><img id="edudminDeleteInfo" class="downImg" src="./images/delete.png"></td>
          </tr>
        </table>
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
              tchArrow: arrowright,
              eduAdminArrow:arrowright,
              tchDropdownTable:false,
              eduAdminDropdownTable:false

            }
        },
      methods:{
        tchSlideToggle: function(){
          var tchDropdownTable = document.getElementById("tchDropdownTable");
          if (this.tchDropdownTable === true){
            this.tchDropdownTable = false;
            this.tchArrow = arrowright;
          }
          else {
            this.tchDropdownTable = true;
            this.tchArrow = arrowdown;
          }
        },
//        用于更改五年制课程表格的显示与否、箭头图标为向右还是向下的函数
        eduAdminSlideToggle: function(){
          var eduAdminDropdownTable = document.getElementById("eduAdminDropdownTable");
          if (this.eduAdminDropdownTable === true){
            this.eduAdminDropdownTable = false;
            this.eduAdminArrow = arrowright;
          }
          else {
            this.eduAdminDropdownTable = true;
            this.eduAdminArrow = arrowdown;
          }
        }
//        用于更改五年制课程表格的显示与否、箭头图标为向右还是向下的函数
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #dropdownStaff{
      width: 25rem;
      min-height: 30rem;
      border: 2px solid #d4d4d9;
    }
    #tchDiv,#eduAdminDiv{
      height:2rem;
      background-color: #37937a;
      display: flex;
      flex-direction: row;
    }
    .dropdownP{
      background-color: #37937a;
      /*background-color: red;*/
      height: 1.7rem;
      width: 6rem;
      padding-top: 0.3rem;
      text-align: center;
      font-weight: bold;
      color:#FFF;
    }
    .dropdownP:hover{
      background-color: #00a539;
    }
    .dropdownImg{
      width:2rem;
      height:2rem;
    }
    .downImg{
      width:2rem;
      height:2rem;
      margin-left: 1rem;
    }
    .dropdownStaffTableSy{
      position: relative;
      width: 100%;
      height:2rem;
      border: 1px solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
