<template>
    <div id="centerBut">
      <select class="selectWM" v-model="supervisorinfoKey.time">
        <option value="0">选择时间</option>
        <option v-for="time in times" :value="time.week+','+time.weekDay+','+time.lessonNum">第{{time.week}}周第{{time.weekDay}}天第{{time.lessonNum}}节课</option>
      </select>
      <button class="am-btn am-btn-success am-radius buttonWM" @click="splitClick()">test2</button>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
              weekAndDay:[],
              supervisorinfoKey:{
                supervisorName:'',
                time:'0'
              },
              times:[
                {week:'1',weekDay:'2',lessonNum:'3'},
                {week:'4',weekDay:'5',lessonNum:'6'}
              ]
            }
        },
        methods:{
          splitClick:function(){
            this.weekAndDay = this.supervisorinfoKey.time.split(",");
//            alert(this.supervisorinfoKey.time);
            alert(this.weekAndDay[0]+"aaa"+this.weekAndDay[1]+this.weekAndDay[2]);
          }
        }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #centerBut{
      text-align: center;
      margin-top: 5rem;
    }
    .selectWM{
      width: 8rem;
      margin: 0 0.7rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
