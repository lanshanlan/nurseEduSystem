<template>
    <div id="stdTable">
      <table id="eduAdminStdTableSy" border="1">
        <thead>
        <tr>
          <th width="4rem">年级</th>
          <th width="4rem">姓名</th>
          <th width="4rem">性别</th>
          <th width="4rem">专业</th>
          <th width="8rem">学号</th>
          <th width="6rem">链接</th>
          <th width="4rem">操作</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="stdInfo in stdInfos">
            <td v-text="stdInfo.grade"></td>
            <td v-text="stdInfo.name"></td>
            <td v-text="stdInfo.sex"></td>
            <td v-text="stdInfo.major"></td>
            <td v-text="stdInfo.stdID"></td>
            <td v-text="stdInfo.interlink"></td>
            <td><img id="saveInfo" src="./images/save.png"><img id="deleteInfo" src="./images/delete.png"></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                stdInfos:[
                  {grade:'2013级',name:'高兴月',sex:'女',major:'护理学',stdID:'1530310503',interlink:'196.168.3.4'},
                  {grade:'2013级',name:'王明',sex:'男',major:'护理学',stdID:'1530310502',interlink:'196.168.3.3'},
                  {grade:'2013级',name:'张玲',sex:'女',major:'护理学',stdID:'1530310513',interlink:'196.168.3.2'}
                ]
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #eduAdminStdTableSy{
      position: relative;
      margin: 2rem auto;
      width: 90%;
      border: 0 solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
