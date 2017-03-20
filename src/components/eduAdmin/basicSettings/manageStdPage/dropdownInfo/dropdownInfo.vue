<template>
    <div id="dropdownInfo">
      <div class="dropdown">
        <input type="text" id="selectYearplan"  placeholder="选择年制（必选项）">
        <div class="dropdown-content">
          <table v-for="year in years">
            <tr class="dropdownMenu" @click="yearClick(year)">{{year}}</tr>
          </table>
        </div>
      </div>
      <!--年制选择下拉列表-->
      <div class="dropdown">
        <input type="text" id="selectGrade" placeholder="选择年级">
        <div class="dropdown-content">
          <div v-if="yearBool">
            <table v-for="three_grade in three_grades">
              <tr class="dropdownMenu" @click="gradeClick(three_grade)">{{three_grade}}</tr>
            </table>
          </div>
          <div v-else>
            <table v-for=" five_grade in  five_grades">
              <tr class="dropdownMenu" @click="gradeClick(five_grade)">{{five_grade}}</tr>
            </table>
          </div>
        </div>
      </div>
      <!--年级选择下拉列表-->
      <!--条件判断错误，待改动-->
      <div class="dropdown">
        <input type="text" id="selectClass"  placeholder="选择班级">
        <div class="dropdown-content">
          <table v-for="clacc in claccs">
            <tr class="dropdownMenu" @click="classClick(clacc)">{{clacc}}</tr>
          </table>
        </div>
      </div>
      <!--班级选择下拉列表-->
      <span><input type="text" id="stdID" placeholder="请输入学号"></span>
      <span><button id="leadIn">导入</button></span>
      <span><button id="leadOut">导出</button></span>
    </div>
</template>

<script>
    export default {
        name: 'dropdownInfo',
        data () {
            return {
              yearBool:true,
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
              ]
            }
        },
      methods:{
        yearClick: function(year){
          //监听搜索内容点击选择，同步到课程表选择框
//          alert("Hello boy!");
          var selectYearplan = document.getElementById("selectYearplan");
          selectYearplan.value = year;
          if (year === '三年制'){
            this.yearBool = true;
          }
          else{
            this.yearBool = false;
          }
        },
        gradeClick: function(grade){
          //监听搜索内容点击选择，同步到课程表选择框
//          alert("Hello boy!");
          var selectGrade = document.getElementById("selectGrade");
          selectGrade.value = grade;
        },
        classClick: function(clacc){
          //监听搜索内容点击选择，同步到课程表选择框
//          alert("Hello boy!");
          var selectClass = document.getElementById("selectClass");
          selectClass.value = clacc;
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #dropdownInfo{
      height: 7rem;
      background-color: white;
    }
    #stdID{
      margin-left: 3rem;
    }
    input{
      margin-top: 2.5rem;
      font-size: 1rem;
      width: 11rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      padding-bottom: 0.2rem;
      height: 1.5rem;
      border-style: solid;
      border-color: #e6e6e6;
    }
    button{
      margin-top: 2.5rem;
      margin-left: 3rem;
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
    button:hover{
      background-color: #00a539;
    }
    .dropdown {
      position: relative;
      margin-left:3rem;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: relative;
      z-index: 2;
      background-color: #f9f9f9;
      min-width: 2rem;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      padding: 1rem;
      opacity: 1.0;
    }
    .dropdown:hover .dropdown-content {
      display: block;
      background-color: #f9f9f9;
      opacity: 1.0;
      position: relative;
    }
    .dropdownMenu:hover{
      background-color:#2F6FAD ;
      cursor: default;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
