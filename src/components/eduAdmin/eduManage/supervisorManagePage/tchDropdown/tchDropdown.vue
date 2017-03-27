<template>
  <div id="tchDropdown">
    <div class="dropdown">
      <!--教师选择下拉列表-->
      <input type="text" id="changeTch" placeholder="任课教师">
      <div class="dropdown-content">
        <table v-for="tch in tchs">
          <tr class="dropdownMenu" @click="tchClick(tch)">{{tch}}</tr>
        </table>
      </div>
    </div>
    <div class="dropdown">
      <!--课程选择下拉列表-->
      <input type="text" id="changeCourse" placeholder="选择课程">
      <div class="dropdown-content">
        <table v-for="course in courses">
          <tr class="dropdownMenu" @click="courseClick(course)">{{course}}</tr>
        </table>
      </div>
    </div>
    <span><button id="searchFor">查找</button></span>
    <span><button id="leadOut">导出</button></span>
  </div>
</template>

<script>
    export default {
        name: 'tchDropdown',
        data () {
            return {
                tchs:[
                  '何平',
                  '陈浩',
                  '李季'
                ],
              courses:[
                '职业生涯规划',
                '哲学与人生',
                '护理学',
                '生理学',
              ]
            }
        },
      methods:{
        tchClick: function(tch){
          //监听搜索内容点击选择，同步到教师选择框
//          alert("Hello boy!");
          var changeTch = document.getElementById("changeTch");
          changeTch.value = tch;
        },
        courseClick: function(course){
          //监听搜索内容点击选择，同步到课程选择框
//          alert("Hello boy!");
          var changeCourse = document.getElementById("changeCourse");
          changeCourse.value = course;
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #tchDropdown{
      height: 7rem;
      background-color: white;
    }
    input{
      margin-top: 2.5rem;
      margin-left: 3rem;
      font-size: 1rem;
      width: 11rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      padding-bottom: 0.2rem;
      height: 1.5rem;
      border: solid;
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
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: relative;
      margin-left: 3rem;
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
