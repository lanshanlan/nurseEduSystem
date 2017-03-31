<template>
    <div id="courseTchInfo">
      <div class="dropdown">
        <!--学期选择下拉列表-->
        <input type="text" id="changeTerm" placeholder="选择学期">
        <div class="dropdown-content">
          <table v-for="year in years">
            <tr class="dropdownMenu" @click="yearClick(year,'第一学期')">{{year}}：第一学期</tr>
            <tr class="dropdownMenu" @click="yearClick(year,'第二学期')">{{year}}：第二学期</tr>
          </table>
        </div>
      </div>
      <span><button id="changebut">切换学期</button></span>
      <span><input type="text" id="courseID" placeholder="课程代码"></span>
      <span><input type="text" id="courseName" placeholder="课程名称"></span>
      <span><input type="text" id="tchID" placeholder="教师编码"></span>
      <span><input type="text" id="tchName" placeholder="教师姓名"></span>
      <span><button id="searchFor">查询</button></span>
    </div>
</template>

<script>
    export default {
        name: 'courseTchInfo',
        data () {
            return {
              years:[
                '2014-2015',
                '2015-2016',
                '2016-2017',
                '2017-2018'
              ]
            }
        },
      methods:{
        yearClick: function(year,term){
          //监听搜索内容点击选择，同步到学期选择框
//          alert("Hello boy!");
          var changeTerm = document.getElementById("changeTerm");
          changeTerm.value = year+': '+term;
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #courseTchInfo{
      height: 7rem;
      background-color: white;
    }
    input{
      margin-top: 2.5rem;
      margin-left: 2rem;
      font-size: 0.8rem;
      width: 6.5rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      padding-bottom: 0.2rem;
      height: 1.5rem;
      border: solid;
      border-color: #e6e6e6;
    }
    #changeTerm{
      width: 11rem;
    }
    button{
       margin-top: 2.5rem;
       margin-left: 2rem;
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
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: relative;
      margin-left: 2rem;
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
