<template>
  <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
    <div id="fiveYearPlan">
      <!--五年制课程表格模块-->
      <div id="fiveYearsPlanDiv">
        <!--五年制课程表格模块下拉菜单-->
        <span><img id="fiveYearsArrow"  @click="fiveTableSlideToggle()" :src="fiveYearsArrow"></span>
        <span id="fiveYearsPlanP" @click="fiveTableSlideToggle()">五年制</span>
        <span><button id="fiveLeadIn">导入</button></span>
        <span><button id="fiveLeadOut">导出</button></span>
        <span><button id="fiveModule">下载模板</button></span>
      </div>
      <div>
        <!--五年制课程表格-->
        <table id="fiveYearsPlanTable" v-show="fiveYearsPlanTable" class="normalTable" style="table-layout: fixed;">
          <thead>
          <tr>
            <th width="6%" rowspan="3">课程编号</th>
            <th width="6%" rowspan="3">课程类别</th>
            <th width="6%" rowspan="3">课程名称</th>
            <th width="12%" rowspan="2" colspan="3">学时</th>
            <th width="64%" colspan="20">执行学期</th>
            <th width="6%" rowspan="2" colspan="2">考核学期</th>
          </tr>
          <tr>
            <td colspan="2">1</td>
            <td colspan="2">2</td>
            <td colspan="2">3</td>
            <td colspan="2">4</td>
            <td colspan="2">5</td>
            <td colspan="2">6</td>
            <td colspan="2">7</td>
            <td colspan="2">8</td>
            <td colspan="2">9</td>
            <td colspan="2">10</td>
          </tr>
          <tr>
            <td>总计</td>
            <td>理论</td>
            <td>实践</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>考察</td>
            <td>考试</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="firstCourse in firstCourses">
            <td v-text="firstCourse.courseId"></td>
            <td v-text="firstCourse.courseType"></td>
            <td v-text="firstCourse.courseName"></td>
            <td v-text="firstCourse.studentTimeAdd"></td>
            <td v-text="firstCourse.studentTimeTheory"></td>
            <td v-text="firstCourse.studentTimePractice"></td>
            <td v-text="firstCourse.term1st"></td>
            <td v-text="firstCourse.term1nd"></td>
            <td v-text="firstCourse.term2st"></td>
            <td v-text="firstCourse.term2nd"></td>
            <td v-text="firstCourse.term3st"></td>
            <td v-text="firstCourse.term3nd"></td>
            <td v-text="firstCourse.term4st"></td>
            <td v-text="firstCourse.term4nd"></td>
            <td v-text="firstCourse.term5st"></td>
            <td v-text="firstCourse.term5nd"></td>
            <td v-text="firstCourse.term6st"></td>
            <td v-text="firstCourse.term6nd"></td>
            <td v-text="firstCourse.term7st"></td>
            <td v-text="firstCourse.term7nd"></td>
            <td v-text="firstCourse.term8st"></td>
            <td v-text="firstCourse.term8nd"></td>
            <td v-text="firstCourse.term9st"></td>
            <td v-text="firstCourse.term9nd"></td>
            <td v-text="firstCourse.term10st"></td>
            <td v-text="firstCourse.term10nd"></td>
            <td v-text="firstCourse.inspect"></td>
            <td v-text="firstCourse.exam"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="threeYearsPlan">
      <!--三年制课程表格模块-->
      <div id="threeYearsPlanDiv">
        <!--三年制课程表格模块下拉菜单-->
        <span><img id="threeYearsArrow"  @click="threeTableSlideToggle()" :src="threeYearsArrow"></span>
        <span id="threeYearsPlanP" @click="threeTableSlideToggle()">三年制</span>
        <span><button id="threeLeadIn">导入</button></span>
        <span><button id="threeLeadOut">导出</button></span>
        <span><button id="threeForm">下载模板</button></span>
      </div>
      <div>
        <!--三年制课程表格-->
        <table id="threeYearsPlanTable" v-show="threeYearsPlanTable" class="normalTable" style="table-layout: fixed;">
          <thead>
          <tr>
            <th width="6%" rowspan="3">课程编号</th>
            <th width="6%" rowspan="3">课程类别</th>
            <th width="6%" rowspan="3">课程名称</th>
            <th width="12%" rowspan="2" colspan="3">学时</th>
            <th width="64%" colspan="16">执行学期</th>
            <th width="6%" rowspan="2" colspan="2">考核学期</th>
          </tr>
          <tr>
            <td colspan="2">1</td>
            <td colspan="2">2</td>
            <td colspan="2">3</td>
            <td colspan="2">4</td>
            <td colspan="2">5</td>
            <td colspan="2">6</td>
            <td colspan="2">7</td>
            <td colspan="2">8</td>
          </tr>
          <tr>
            <td>总计</td>
            <td>理论</td>
            <td>实践</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>考察</td>
            <td>考试</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="secondCourse in secondCourses">
            <td v-text="secondCourse.courseId"></td>
            <td v-text="secondCourse.courseType"></td>
            <td v-text="secondCourse.courseName"></td>
            <td v-text="secondCourse.studentTimeAdd"></td>
            <td v-text="secondCourse.studentTimeTheory"></td>
            <td v-text="secondCourse.studentTimePractice"></td>
            <td v-text="secondCourse.term1st"></td>
            <td v-text="secondCourse.term1nd"></td>
            <td v-text="secondCourse.term2st"></td>
            <td v-text="secondCourse.term2nd"></td>
            <td v-text="secondCourse.term3st"></td>
            <td v-text="secondCourse.term3nd"></td>
            <td v-text="secondCourse.term4st"></td>
            <td v-text="secondCourse.term4nd"></td>
            <td v-text="secondCourse.term5st"></td>
            <td v-text="secondCourse.term5nd"></td>
            <td v-text="secondCourse.term6st"></td>
            <td v-text="secondCourse.term6nd"></td>
            <td v-text="secondCourse.term7st"></td>
            <td v-text="secondCourse.term7nd"></td>
            <td v-text="secondCourse.term8st"></td>
            <td v-text="secondCourse.term8nd"></td>
            <td v-text="secondCourse.inspect"></td>
            <td v-text="secondCourse.exam"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    import arrowright from "./images/arrowright.png"
    import arrowdown from "./images/arrowdown.png"
    export default {
        name: 'yearPlan',
        data () {
            return {
                fiveYearsPlanTable:false,
                threeYearsPlanTable:false,//用于更改课程表格显示与否的变量
                fiveYearsArrow: arrowright,
                threeYearsArrow:arrowright,//用于更改箭头图标为向右还是向下的变量
                firstCourses:[
                  {courseId:'12345',courseType:'公共基础课',courseName:'职业生涯规划',studentTimeAdd:'36',studentTimeTheory:'32',studentTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',term9st:'',term9nd:'',term10st:'',term10nd:'',inspect:'1',exam:''},
                  {courseId:'12346',courseType:'公共基础课',courseName:'哲学与人生',studentTimeAdd:'36',studentTimeTheory:'32',studentTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',term9st:'',term9nd:'',term10st:'',term10nd:'',inspect:'2',exam:''},
                  {courseId:'12347',courseType:'公共基础课',courseName:'经济政治与社会',studentTimeAdd:'36',studentTimeTheory:'32',studentTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',term9st:'',term9nd:'',term10st:'',term10nd:'',inspect:'3',exam:''}
                ],
              secondCourses:[
                {courseId:'12345',courseType:'公共基础课',courseName:'职业生涯规划',studentTimeAdd:'36',studentTimeTheory:'32',studentTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',inspect:'1',exam:''},
                {courseId:'12346',courseType:'公共基础课',courseName:'哲学与人生',studentTimeAdd:'36',studentTimeTheory:'32',studentTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',inspect:'2',exam:''},
                {courseId:'12347',courseType:'公共基础课',courseName:'经济政治与社会',studentTimeAdd:'36',studentTimeTheory:'32',studentTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',inspect:'3',exam:''}
              ]
            }
        },
      beforeMount:function() {
        this.$http.post('../fiveYearPlanManageJson',{},{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.firstCourses = response.body.firstCourses;
        },function(error){
          console.log("获取error");
        });
        this.$http.post('../threeYearPlanManageJson',{},{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.secondCourses = response.body.secondCourses;
        },function(error){
          console.log("获取error");
        });
      },
      methods:{
         fiveTableSlideToggle: function(){
           var fiveYearsPlanTable = document.getElementById("fiveYearsPlanTable");
           if (this.fiveYearsPlanTable === true){
             this.fiveYearsPlanTable = false;
             this.fiveYearsArrow = arrowright;
           }
           else {
             this.fiveYearsPlanTable = true;
             this.fiveYearsArrow = arrowdown;
           }
         },
//        用于更改五年制课程表格的显示与否、箭头图标为向右还是向下的函数
        threeTableSlideToggle: function(){
          var threeYearsPlanTable = document.getElementById("threeYearsPlanTable");
          if (this.threeYearsPlanTable === true){
            this.threeYearsPlanTable = false;
            this.threeYearsArrow = arrowright;
          }
          else {
            this.threeYearsPlanTable = true;
            this.threeYearsArrow = arrowdown;
          }
        }
//        用于更改三年制课程表格的显示与否、箭头图标为向右还是向下的函数
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }

    #fiveYearsPlanDiv,#threeYearsPlanDiv{
      position: relative;
      background-color: #158064;
      border:thin solid #d4d4d9;
      height: 2rem;
      width: 100%;
    }
    #fiveYearsPlanP,#threeYearsPlanP{
      position: absolute;
      background-color: #158064;
      /*background-color: red;*/
      height: 1.7rem;
      width: 10rem;
      padding-top: 0.3rem;
      text-align: center;
      color:#FFF;
      cursor: default;
    }
    #fiveYearsPlanP:hover,#threeYearsPlanP:hover,img:hover{
      background-color: #00a539;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
    button{
      float: right;
      margin-top: 0.3rem;
      margin-bottom: auto;
      margin-right: 5rem;
      background-color: #158064;
      font-size: 0.8rem;
      color:#FFF;
      text-align: center;
      border-radius: 0.5rem;
      padding-bottom: 0.1rem;
      height: 1.4rem;
      min-width: 5rem;
      border-color: white;
      border-style: solid;
      border-width: 0.1rem;
    /*更改button的边框属性*/
    }
    button:hover{
      background-color: #00a539;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
