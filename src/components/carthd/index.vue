<template>
  <div>
    <div class="timelimit">
      <ul>
        <li class="limit">限时抢报</li>
        <li>查看全部<a class="icon iconfont icon-shezhi-youjiantou"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    msg: { default: "" } //msg
  }
};
</script>
<style lang="less" scoped>
.timelimit {
// border: solid red 1px;
  width:350px;
  margin: 0 auto;
  // margin-left:20px;
  padding:28px 0px 12px;
  ul {
    
    display: flex;
    justify-content: space-between;
    :nth-of-type(2) {
      color: rgba(170, 172, 182, 1);
      font-size: 13px;
    }
  }
  .limit {
    font-size: 19px;
    margin-left:6px;
  }
}
.icon-shezhi-youjiantou:before {
  color: rgba(184, 185, 193, 1);
  font-size: 20px;
  vertical-align: middle;
}
</style>