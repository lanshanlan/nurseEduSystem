<template>
  <div id="stdInquireGradeChangeTerm">
    <div class="dropdown">
      <input type="text" id="changeTerm" placeholder="选择学期">
      <div class="dropdown-content">
        <table v-for="year in years">
          <tr class="dropdownMenu" @click="yearClick(year,'第一学期')">{{year}}：第一学期</tr>
          <tr class="dropdownMenu" @click="yearClick(year,'第二学期')">{{year}}：第二学期</tr>
        </table>
      </div>
    </div>
    <span><button id="changebut">切换学期</button></span>
    <span><button id="allbut">所有学期成绩</button></span>
  </div>
</template>

<script>
    export default {
        name: 'stdInquireGradeChangeTerm',
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
          //监听搜索内容点击选择，同步到课程表选择框
//          alert("Hello boy!");
          var changeTerm = document.getElementById("changeTerm");
          changeTerm.value = year+': '+term;
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #stdInquireGradeChangeTerm{
      height: 7rem;
      background-color: white;
    }
    #changeTerm{
      margin-top: 2.5rem;
      font-size: 1rem;
      width: 11rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      padding-bottom: 0.2rem;
      height: 1.5rem;
      border: solid;
      border-color: #e6e6e6;
    }
    #changebut{
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
    #changebut:hover{
      background-color: #00a539;
    }
    #allbut{
      margin-top: 2.5rem;
      margin-right: 5rem;
      background-color: #158064;
      font-size: 0.8rem;
      color:#FFF;
      font-weight: bold;
      text-align: center;
      border-radius: 0.5rem;
      float: right;
      padding-bottom: 0.2rem;
      height: 2rem;
      min-width: 5rem;
      border: none;
    }
    #allbut:hover{
      background-color: #00a539;
    }
    .dropdown {
      position: relative;
      margin-left:5rem;
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
