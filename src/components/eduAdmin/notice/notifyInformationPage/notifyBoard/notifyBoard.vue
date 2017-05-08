<template>
    <div id="notifyBoard" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <div style="background-color: white">
        <div style="border-bottom: 1px solid black">
          <h2 style="text-align: center">{{title}}</h2>
          <h4 style="text-align: center">{{time}}</h4>
        </div>
        <p style="text-indent: 3rem">{{article}}</p>
        <p class="download" @click="downloadNoticeClick"><u>下载附件</u></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                title:'新标题',
                time:'2017.05.08',
                article:'哈哈哈哈哈哈哈哈哈哈哈哈嗝'
            }
        },
      beforeMount:function(){
        this.$http.post('./',{},{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.title = response.body.title;
          this.time = response.body.time;
          this.article = response.body.article;
        },function(error){
          console.log("获取error");
        });
      },
      methods:{
        downloadNoticeClick:function(){
          location.href="";
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    .download{
      color: #158064;
      cursor: pointer;
      text-align: center;
      padding-bottom: 2rem;
    }
    .download:hover{
      color: black;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>
