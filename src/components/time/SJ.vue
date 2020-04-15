<template>
  <div class="Date">
    <span class="date">{{h}}</span>
    <h6>:</h6>
    <span class="date">{{m}}</span>
    <h6>:</h6>
    <span class="date">{{s}}</span>
  </div>
</template>
<script>
export default {
  name: "Date",
  data() {
    return {
      d: "",
      h: "",
      m: "",
      s: ""
    };
  },
  created() {
    this.countTime();
  },
  methods: {
    countTime: function() {
      var date = new Date();
      var now = date.getTime();
      var endDate = new Date("2020-04-10 03:10:23");
      var end = endDate.getTime();
      var leftTime = end - now;
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.m = Math.floor((leftTime / 1000 / 60) % 60);
        this.s = Math.floor((leftTime / 1000) % 60);
      }
      console.log(this.s);
      setTimeout(this.countTime, 1000);
    }
  }
};
</script>
<style scoped lang="less">
.Date {
  margin-left: -40px;
}
.Date span {
  width: 22px;
  height: 15px;
  margin-top: 12px;
  color: #fff;
  background: #be5d1f;
  display: inline-block;
  vertical-align: middle;
  border-radius: 3px;
  // border:solid yellow 1px;
  line-height: 16px;
}
h6 {
  color: #be5d1f;
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
