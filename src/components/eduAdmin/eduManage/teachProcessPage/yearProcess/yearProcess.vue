<template>
  <div id="yearProcess">
    <div id="FYProcessAll">
      <div id="FYProcessDiv">
        <!--五年制课程表格模块-->
        <span><img id="FYArrow"  @click="fiveTableSlideToggle()" :src="FYArrow"></span>
        <span id="FYProcessP" @click="fiveTableSlideToggle()">五年制</span>
        <span><button id="fiveLeadIn">导入</button></span>
        <span><button id="fiveLeadOut">导出</button></span>
      </div>
      <div id="FYProcessMenu" v-show="FYProcessMenu">
        <div id="FYfirstProcessDiv">
          <!--五年制大一课程表格模块-->
          <span><img id="FYfirstArrow"  @click="fiveFirstTableSlideToggle()" :src="FYfirstArrow"></span>
          <span id="FYfirstProcessP" @click="fiveFirstTableSlideToggle()">大一</span>
        </div>
        <div>
          <table id="FYfirstProcessTable" v-show="FYfirstProcessTable" border="1">
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
        <div id="FYsecondProcessDiv">
          <!--五年制大二课程表格模块-->
          <span><img id="FYsecondArrow"  @click="fiveSecondTableSlideToggle()" :src="FYsecondArrow"></span>
          <span id="FYsecondProcessP" @click="fiveSecondTableSlideToggle()">大二</span>
        </div>
        <div>
          <table id="FYsecondProcessTable" v-show="FYsecondProcessTable" border="1">
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
        <div id="FYthirdProcessDiv">
          <!--五年制大三课程表格模块-->
          <span><img id="FYthirdArrow"  @click="fiveThirdTableSlideToggle()" :src="FYthirdArrow"></span>
          <span id="FYthirdProcessP" @click="fiveThirdTableSlideToggle()">大三</span>
        </div>
        <div>
          <table id="FYthirdProcessTable" v-show="FYthirdProcessTable" border="1">
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
        <div id="FYfourthProcessDiv">
          <!--五年制大四课程表格模块-->
          <span><img id="FYfourthArrow"  @click="fiveFourthTableSlideToggle()" :src="FYfourthArrow"></span>
          <span id="FYfourthProcessP" @click="fiveFourthTableSlideToggle()">大四</span>
        </div>
        <div>
          <table id="FYfourthProcessTable" v-show="FYfourthProcessTable" border="1">
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
        <div id="FYfifthProcessDiv">
          <!--五年制大五课程表格模块-->
          <span><img id="FYfifthArrow"  @click="fiveFifthTableSlideToggle()" :src="FYfifthArrow"></span>
          <span id="FYfifthProcessP" @click="fiveFifthTableSlideToggle()">大五</span>
        </div>
        <div>
          <table id="FYfifthProcessTable" v-show="FYfifthProcessTable" border="1">
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

    <div id="TYProcessAll">
      <div id="TYProcessDiv">
        <!--三年制课程表格模块-->
        <span><img id="TYArrow"  @click="threeTableSlideToggle()" :src="TYArrow"></span>
        <span id="TYProcessP" @click="threeTableSlideToggle()">三年制</span>
        <span><button id="threeLeadIn">导入</button></span>
        <span><button id="threeLeadOut">导出</button></span>
      </div>
      <div id="TYProcessMenu" v-show="TYProcessMenu">
        <div id="TYfirstProcessDiv">
          <!--三年制大一课程表格模块-->
          <span><img id="TYfirstArrow"  @click="threeFirstTableSlideToggle()" :src="TYfirstArrow"></span>
          <span id="TYfirstProcessP" @click="threeFirstTableSlideToggle()">大一</span>
        </div>
        <div>
          <table id="TYfirstProcessTable" v-show="TYfirstProcessTable" border="1">
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
        <div id="TYsecondProcessDiv">
          <!--三年制大二课程表格模块-->
          <span><img id="TYsecondArrow"  @click="threeSecondTableSlideToggle()" :src="TYsecondArrow"></span>
          <span id="TYsecondProcessP" @click="threeSecondTableSlideToggle()">大二</span>
        </div>
        <div>
          <table id="TYsecondProcessTable" v-show="TYsecondProcessTable" border="1">
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
        <div id="TYthirdProcessDiv">
          <!--三年制大三课程表格模块-->
          <span><img id="TYthirdArrow"  @click="threeThirdTableSlideToggle()" :src="TYthirdArrow"></span>
          <span id="TYthirdProcessP" @click="threeThirdTableSlideToggle()">大三</span>
        </div>
        <div>
          <table id="TYthirdProcessTable" v-show="TYthirdProcessTable" border="1">
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
  </div>
</template>

<script>
  import arrowright from "./images/arrowright.png"
  import arrowdown from "./images/arrowdown.png"
  export default {
    name: 'yearProcess',
    data () {
      return {
        FYPlanMenu:false, TYPlanMenu:false,//用于更改五年制各年级下拉列表显示与否的变量
        FYfirstProcessTable:false,FYsecondProcessTable:false,FYthirdProcessTable:false,FYfourthProcessTable:false,FYfifthProcessTable:false,
//        用于更改五年制各年级课程表格显示与否的变量
        TYfirstProcessTable:false,TYsecondProcessTable:false,TYthirdProcessTable:false,
//        用于更改三年制各年级课程表格显示与否的变量
        FYArrow: arrowright,TYArrow: arrowright,//用于更改五年制三年制箭头图标为向右还是向下的变量
        FYfirstArrow: arrowright,FYsecondArrow: arrowright,FYthirdArrow: arrowright,FYfourthArrow: arrowright,FYfifthArrow: arrowright,
//        用于更改五年制各年级箭头图标为向右还是向下的变量
        TYfirstArrow: arrowright,TYsecondArrow: arrowright,TYthirdArrow: arrowright,
//        用于更改三年制各年级箭头图标为向右还是向下的变量
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
        var FYProcessMenu = document.getElementById("FYProcessMenu");
        if (this.FYProcessMenu === true){
          this.FYProcessMenu = false;
          this.FYArrow = arrowright;
        }
        else {
          this.FYProcessMenu = true;
          this.FYArrow = arrowdown;
        }
      },
//        用于更改五年制各年级下拉列表的显示与否、箭头图标为向右还是向下的函数
      threeTableSlideToggle: function(){
        var TYProcessMenu = document.getElementById("TYProcessMenu");
        if (this.TYProcessMenu === true){
          this.TYProcessMenu = false;
          this.TYArrow = arrowright;
        }
        else {
          this.TYProcessMenu = true;
          this.TYArrow = arrowdown;
        }
      },
//        用于更改三年制各年级下拉列表的显示与否、箭头图标为向右还是向下的函数
      fiveFirstTableSlideToggle: function(){
        var FYfirstProcessTable = document.getElementById("FYfirstProcessTable");
        if (this.FYfirstProcessTable === true){
          this.FYfirstProcessTable = false;
          this.FYfirstArrow = arrowright;
        }
        else {
          this.FYfirstProcessTable = true;
          this.FYfirstArrow = arrowdown;
        }
      },
//        用于更改五年制大一课程表格的显示与否、箭头图标为向右还是向下的函数
      fiveSecondTableSlideToggle: function(){
        var FYsecondProcessTable = document.getElementById("FYsecondProcessTable");
        if (this.FYsecondProcessTable === true){
          this.FYsecondProcessTable = false;
          this.FYsecondArrow = arrowright;
        }
        else {
          this.FYsecondProcessTable = true;
          this.FYsecondArrow = arrowdown;
        }
      },
//        用于更改五年制大二课程表格的显示与否、箭头图标为向右还是向下的函数
      fiveThirdTableSlideToggle: function(){
        var FYthirdProcessTable = document.getElementById("FYthirdProcessTable");
        if (this.FYthirdProcessTable === true){
          this.FYthirdProcessTable = false;
          this.FYthirdArrow = arrowright;
        }
        else {
          this.FYthirdProcessTable = true;
          this.FYthirdArrow = arrowdown;
        }
      },
//        用于更改五年制大三课程表格的显示与否、箭头图标为向右还是向下的函数
      fiveFourthTableSlideToggle: function(){
        var FYfourthProcessTable = document.getElementById("FYfourthProcessTable");
        if (this.FYfourthProcessTable === true){
          this.FYfourthProcessTable = false;
          this.FYfourthArrow = arrowright;
        }
        else {
          this.FYfourthProcessTable = true;
          this.FYfourthArrow = arrowdown;
        }
      },
//        用于更改五年制大四课程表格的显示与否、箭头图标为向右还是向下的函数
      fiveFifthTableSlideToggle: function(){
        var FYfifthProcessTable = document.getElementById("FYfifthProcessTable");
        if (this.FYfifthProcessTable === true){
          this.FYfifthProcessTable = false;
          this.FYfifthArrow = arrowright;
        }
        else {
          this.FYfifthProcessTable = true;
          this.FYfifthArrow = arrowdown;
        }
      },
//        用于更改五年制大五课程表格的显示与否、箭头图标为向右还是向下的函数
      threeFirstTableSlideToggle: function(){
        var TYfirstProcessTable = document.getElementById("TYfirstProcessTable");
        if (this.TYfirstProcessTable === true){
          this.TYfirstProcessTable = false;
          this.TYfirstArrow = arrowright;
        }
        else {
          this.TYfirstProcessTable = true;
          this.TYfirstArrow = arrowdown;
        }
      },
//        用于更改三年制大一课程表格的显示与否、箭头图标为向右还是向下的函数
      threeSecondTableSlideToggle: function(){
        var TYsecondProcessTable = document.getElementById("TYsecondProcessTable");
        if (this.TYsecondProcessTable === true){
          this.TYsecondProcessTable = false;
          this.TYsecondArrow = arrowright;
        }
        else {
          this.TYsecondProcessTable = true;
          this.TYsecondArrow = arrowdown;
        }
      },
//        用于更改三年制大二课程表格的显示与否、箭头图标为向右还是向下的函数
      threeThirdTableSlideToggle: function(){
        var TYthirdProcessTable = document.getElementById("TYthirdProcessTable");
        if (this.TYthirdProcessTable === true){
          this.TYthirdProcessTable = false;
          this.TYthirdArrow = arrowright;
        }
        else {
          this.TYthirdProcessTable = true;
          this.TYthirdArrow = arrowdown;
        }
      },
//        用于更改三年制大三课程表格的显示与否、箭头图标为向右还是向下的函数
    }
  }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #FYProcessDiv,#FYfirstProcessDiv,#FYsecondProcessDiv,#FYthirdProcessDiv,#FYfourthProcessDiv,#FYfifthProcessDiv,#TYProcessDiv,#TYfirstProcessDiv,#TYsecondProcessDiv,#TYthirdProcessDiv{
      position: relative;
      background-color: #37937a;
      height: 2rem;
      width: 90%;
    }
    #FYProcessDiv{
      margin: 2rem auto 0;
    }
    #TYProcessDiv{
      margin: 0 auto;
      border-top-style: solid;
      border-top-width: 0.3rem;
      border-top-color: #d4d4d9;
    }
    #FYfirstProcessDiv,#FYsecondProcessDiv,#FYthirdProcessDiv,#FYfourthProcessDiv,#FYfifthProcessDiv,#TYfirstProcessDiv,#TYsecondProcessDiv,#TYthirdProcessDiv{
      margin: 0 auto;
      border-top-style: solid;
      border-top-width: 0.1rem;
      border-top-color: #d4d4d9;
    }
    #FYProcessP,#FYfirstProcessP,#FYsecondProcessP,#FYthirdProcessP,#FYfourthProcessP,#FYfifthProcessP,#TYProcessP,#TYfirstProcessP,#TYsecondProcessP,#TYthirdProcessP  {
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
    #FYProcessP:hover,#FYfirstProcessP:hover,#FYsecondProcessP:hover,#FYthirdProcessP:hover,#FYfourthProcessP:hover,#FYfifthProcessP:hover,#TYProcessP:hover,#TYfirstProcessP:hover,#TYsecondProcessP:hover,#TYthirdProcessP:hover{
      background-color: #00a539;
    }
    #FYfirstArrow,#FYsecondArrow,#FYthirdArrow,#FYfourthArrow,#FYfifthArrow,#TYfirstArrow,#TYsecondArrow,#TYthirdArrow{
      margin-left: 0.4rem;
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
