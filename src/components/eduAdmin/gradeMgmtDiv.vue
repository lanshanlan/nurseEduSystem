<template>
  <div id="gradeManagementDiv">
    <div id="fiveYearDiv">
      <button class="yearButton" @click="fiveYearClick"><p id="fiveYearArrow" class="arrowOpen">.</p>五年制</button>
      <table id="fiveYearTable" v-show="fiveYearTable">
        <tr v-for="fiveGrade in fiveGrades">
          <td>{{ fiveGrade.name }}</td>
          <td>{{ fiveGrade.peopleNum }}</td>
          <td><a :href="fiveGrade.informationUrl">查看年级信息</a></td>
        </tr>
      </table>
    </div>
    <div id="threeYearDiv">
      <button class="yearButton" @click="threeYearClick"><p id="threeYearArrow" class="arrowClose">.</p>三年制</button>
      <table id="threeYearTable" v-show="threeYearTable">
        <tr v-for="threeGrade in threeGrades">
          <td>{{ threeGrade.name }}</td>
          <td>{{ threeGrade.peopleNum }}</td>
          <td><a :href="threeGrade.informationUrl">查看年级信息</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gradeManagementDiv',
    data () {
      return {
        fiveArrow: true,
        threeArrow: false,
        fiveYearTable: true,
        threeYearTable: false,
        fiveGrades: [
          { name:"2016级", peopleNum:"167", informationUrl:"" },
          { name:"2015级", peopleNum:"167", informationUrl:"" },
          { name:"2014级", peopleNum:"167", informationUrl:"" },
          { name:"2013级", peopleNum:"167", informationUrl:"" },
          { name:"2012级", peopleNum:"167", informationUrl:"" },
        ],
        threeGrades: [
          { name:"2016级", peopleNum:"167", informationUrl:"" },
          { name:"2015级", peopleNum:"167", informationUrl:"" },
          { name:"2014级", peopleNum:"167", informationUrl:"" },
        ],
      }
    },
    methods: {
      fiveYearClick: function () {
        var fiveYearArrow = document.getElementById("fiveYearArrow");
        if (!this.fiveArrow) {
//              alert("open");
          this.fiveArrow = true;
          this.fiveYearTable = true;
          fiveYearArrow.className = "arrowOpen";
        } else {
//              alert("close");
          this.fiveArrow = false;
          this.fiveYearTable = false;
          fiveYearArrow.className = "arrowClose";
        }
      },
      threeYearClick: function () {
        var threeYearArrow = document.getElementById("threeYearArrow");
        if (!this.threeArrow) {
//              alert("open");
          this.threeArrow = true;
          this.threeYearTable = true;
          threeYearArrow.className = "arrowOpen";
        } else {
//              alert("close");
          this.threeArrow = false;
          this.threeYearTable = false;
          threeYearArrow.className = "arrowClose";
        }
      },
    }
  }
</script>

<style scoped>
  html {
  }
  #gradeManagementDiv{
    margin: 1.5rem auto;
    background-color: white;
    width: 90%;
  }
  .yearButton{
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    outline: none;
    background-color: #37937A;
    border: thin solid #37937A;
    margin: 0.1rem;
    color: white;
  }
  .yearButton:hover{
    cursor: pointer;
  }
  .arrowClose{
    border-bottom: solid #116D54;
    border-right: solid #116D54;
    width: 1rem;
    height: 1rem;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);/* IE 9 */
    -webkit-transform: rotate(-45deg);/* Safari and Chrome */
    -o-transform: rotate(-45deg);/* Opera */
    -moz-transform: rotate(-45deg);/* Firefox */
    margin: 0.5rem;
    color: #37937A;
    /*position: relative;*/
    /*bottom: 0.3rem;*/
  }
  .arrowOpen{
    border-bottom: solid #116D54;
    border-right: solid #116D54;
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);/* IE 9 */
    -webkit-transform: rotate(45deg);/* Safari and Chrome */
    -o-transform: rotate(45deg);/* Opera */
    -moz-transform: rotate(45deg);/* Firefox */
    margin: 0.5rem;
    color: #37937A;
    /*position: relative;*/
    /*bottom: 0.3rem;*/
  }
  table{
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    border-right: thin solid #E3E3E3;
    border-left: thin solid #E3E3E3;
  }
  td{
    border-bottom: thin solid #E3E3E3;
    height: 2.5rem;
    text-align: center;
  }
  a{
    color: #158064;
  }
  @media screen and (max-width: 1023px) {
    html {
    }
  }
</style>
