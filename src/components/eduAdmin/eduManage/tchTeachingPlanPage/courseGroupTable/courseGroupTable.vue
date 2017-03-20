<template>
  <div id="courseGroupTable">
    <table id="courseGroupTableSy" border="1">
      <thead>
      <tr>
        <th width="4rem">课程组名称</th>
        <th width="4rem">课程组编号</th>
        <th width="4rem">组长</th>
        <th width="4rem">查看</th>
        <th width="4rem">导出</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" courseGroupInfo in  courseGroupInfos">
        <td v-text="courseGroupInfo.groupName"></td>
        <td v-text="courseGroupInfo.groupID"></td>
        <td v-text="courseGroupInfo.headman"></td>
        <td v-text="courseGroupInfo.look"></td>
        <td><button id="download">下载</button></td>
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
                courseGroupInfos:[
                  {groupName:'临床医学',groupID:'2017001',headman:'何平',look:'未查看'},
                  {groupName:'临床护理',groupID:'2017002',headman:'张扬',look:'已查看'},
                  {groupName:'护用药理',groupID:'2017003',headman:'李季',look:'未查看'}
                ]
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #courseGroupTableSy{
      position: relative;
      margin: 2rem auto;
      width: 90%;
      border: 0 solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }
    button{
      margin: 0.2rem auto;
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
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
