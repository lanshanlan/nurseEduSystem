<template>
  <div>
    <div id="yearPlan">
      <div id="fiveYearsPlanDiv">
        <!--五年制课程表格模块-->
        <span><img id="fiveYearsArrow"  @click="fiveTableSlideToggle()" :src="fiveYearsArrow"></span>
        <span id="fiveYearsPlanP" @click="fiveTableSlideToggle()">五年制</span>
        <span><button id="fiveLeadIn">导入</button></span>
        <span><button id="fiveLeadOut">导出</button></span>
      </div>
      <div>
        <table id="fiveYearsPlanTable" v-show="fiveYearsPlanTable" border="1">
          <thead>
          <tr>
            <th width="1rem" rowspan="2">课程类别</th>
            <th width="4rem" rowspan="2">课程名称</th>
            <th width="3rem" colspan="3">学时</th>
            <th width="8rem" colspan="8">执行学期</th>
            <th width="4rem" colspan="2">考核学期</th>
          </tr>
          <tr>
            <td>总计</td>
            <td>理论</td>
            <td>实践</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>考察</td>
            <td>考试</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td rowspan="6">公共基础课</td>
          </tr>
          <tr v-for="course in courses">
            <td v-text="course.cozName"></td>
            <td v-text="course.stdTimeAdd"></td>
            <td v-text="course.stdTimeTheory"></td>
            <td v-text="course.stdTimePractice"></td>
            <td v-text="course.term1"></td>
            <td v-text="course.term2"></td>
            <td v-text="course.term3"></td>
            <td v-text="course.term4"></td>
            <td v-text="course.term5"></td>
            <td v-text="course.term6"></td>
            <td v-text="course.term7"></td>
            <td v-text="course.term8"></td>
            <td v-text="course.inspect"></td>
            <td v-text="course.exam"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="threeYearsPlan">
      <div id="threeYearsPlanDiv">
        <!--三年制课程表格模块-->
        <span><img id="threeYearsArrow"  @click="threeTableSlideToggle()" :src="threeYearsArrow"></span>
        <span id="threeYearsPlanP" @click="threeTableSlideToggle()">三年制</span>
        <span><button id="threeLeadIn">导入</button></span>
        <span><button id="threeLeadOut">导出</button></span>
      </div>
      <div>
        <table id="threeYearsPlanTable" v-show="threeYearsPlanTable" border="1">
          <thead>
          <tr>
            <th width="1rem" rowspan="2">课程类别</th>
            <th width="4rem" rowspan="2">课程名称</th>
            <th width="3rem" colspan="3">学时</th>
            <th width="8rem" colspan="8">执行学期</th>
            <th width="4rem" colspan="2">考核学期</th>
          </tr>
          <tr>
            <td>总计</td>
            <td>理论</td>
            <td>实践</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>考察</td>
            <td>考试</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td rowspan="6">公共基础课</td>
          </tr>
          <tr v-for="course in courses">
            <td v-text="course.cozName"></td>
            <td v-text="course.stdTimeAdd"></td>
            <td v-text="course.stdTimeTheory"></td>
            <td v-text="course.stdTimePractice"></td>
            <td v-text="course.term1"></td>
            <td v-text="course.term2"></td>
            <td v-text="course.term3"></td>
            <td v-text="course.term4"></td>
            <td v-text="course.term5"></td>
            <td v-text="course.term6"></td>
            <td v-text="course.term7"></td>
            <td v-text="course.term8"></td>
            <td v-text="course.inspect"></td>
            <td v-text="course.exam"></td>
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
                courses:[
                  {cozName:'职业生涯规划',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'36',term2:'',term3:'',term4:'',term5:'',term6:'',term7:'',term8:'',inspect:'1',exam:''},
                  {cozName:'哲学与人生',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'',term2:'36',term3:'',term4:'',term5:'',term6:'',term7:'',term8:'',inspect:'2',exam:''},
                  {cozName:'经济政治与社会',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'',term2:'',term3:'36',term4:'',term5:'',term6:'',term7:'',term8:'',inspect:'3',exam:''},
                  {cozName:'职业道德与法律',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'',term2:'',term3:'',term4:'36',term5:'',term6:'',term7:'',term8:'',inspect:'4',exam:''},
                  {cozName:'语文',stdTimeAdd:'180',stdTimeTheory:'156',stdTimePractice:'24',term1:'108',term2:'72',term3:'',term4:'',term5:'',term6:'',term7:'',term8:'',inspect:'2',exam:'1'}
                ]
            }
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

    #yearPlan{

    }
    #fiveYearsPlanDiv,#threeYearsPlanDiv{
      position: relative;
      background-color: #37937a;
      height: 2rem;
      width: 90%;
    }
    #fiveYearsPlanDiv{
      margin: 2rem auto 0;
    }
    #threeYearsPlanDiv{
      margin: 0 auto;
      border-top-style: solid;
      border-top-width: 0.1rem;
      border-top-color: #d4d4d9;
    }
    #fiveYearsPlanP,#threeYearsPlanP{
      position: absolute;
      background-color: #37937a;
      /*background-color: red;*/
      height: 1.7rem;
      width: 10rem;
      padding-top: 0.3rem;
      text-align: center;
      font-weight: bold;
      color:#FFF;
    }
    #fiveYearsPlanP:hover,#threeYearsPlanP:hover{
      background-color: #00a539;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
    img:hover{
      background-color: white;
    }
    button{
      float: right;
      margin-top: 0.3rem;
      margin-bottom: auto;
      margin-right: 5rem;
      background-color: #158064;
      font-size: 0.8rem;
      color:#FFF;
      font-weight: bold;
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
    table{
      position: relative;
      width: 90%;
      margin: 0 auto;
      border: 0 solid #d4d4d9;
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
