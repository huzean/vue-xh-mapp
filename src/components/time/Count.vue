<template>
  <div>
       <div class="info" v-if="time">
       {{ time.hours}}
      {{time.minutestes}}
      : {{time.seconds}}
      </div> 
  </div>
</template>
<script>
export default {
  //(2)接收数据
  props:{  //声明接收父组件数据
    msg:{default:""} //msg
  },
   data() {
    return {
       time: {
        hours: null,
        minutes: null,
         seconds: null
      }
    };
  },
  created() {},
  mounted() {
    // this.setCountDown("2020/4/1/0/02");
  },
  // methods: {
  //   setCountDown(date) {
  //     let time = new Date(date);

  //     let timer = setInterval(() => {
  //       if (this.timer && this.timer.seconds === 0) {
  //         clearInterval(timer);
  //       } else {
  //         time = new Date(time - 1000);
  //         let timeObj = {
  //           hours: time.getHours() || 2,
  //           minutes: time.getMinutes() || 0,
  //           seconds: time.getSeconds() || 0
  //         };
  //         this.time = timeObj;
  //       }
  //     }, 1000);
  //   }
  // }
 
}
</script>
<style  scope   lang='less'>
  
</style>