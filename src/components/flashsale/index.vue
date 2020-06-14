<template>
  <div>
    <div class="lefts">
      <img src="../../assets/cart1.png" alt />
    </div>
    <div class="rights">
      <span>
        <p>
          <a class="groupbooking">拼团</a>
          0元抢订高一数学刺暑假提高班
        </p>
        <span class="price">
          <p>
           ￥<span>16220</span>
            <a>￥</a>
            <a>0</a>
          </p>
        </span>
      </span>
      <div class="time">
        <h6>
          离抢报结束
          <span>立即抢报</span>
        </h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "flashale",
  data() {
      return{
          
      }
  }
};
</script>
<style scoped lang="less">
.lefts {
  display: inline-block;
  vertical-align: middle;
  width: 90px;
  height: 60px;
  //  border: 1px red solid;
  color: #fff;
  margin-top: -16px;
  img {
    width: 112.5px;
    height: 75px;
  }
}
.rights {
  display: inline-block;
  vertical-align: middle;
  width: 158px;
  height: 96px;
  margin-top: 18px;
  margin-left: 30px;

  span {
    p {
      font-size: 16px;
      text-align: left;
      white-space: normal;
      line-height: 20px;
      margin-bottom: 20px;
    }
    .groupbooking {
      color: #fff;
      font-size: 11px;
      background: rgba(255, 125, 108, 1);
      margin-left: 3px;
      margin-right: 5px;
      padding: 0px 3px 0px 3px;
      border-radius: 2px;
      vertical-align: top;
    }
    .price {
      p{
      color: rgba(170, 172, 182, 1);
      }
      span {
        color: rgba(170, 172, 182, 1);
        font-size: 14px;
        text-decoration: line-through;
      }
      a {
        color: rgba(255, 93, 82, 1);
      }
      a:nth-child(2) {
        font-size: 14px;
      }
      a:nth-child(3) {
        font-size: 18px;
        vertical-align: bottom;
      }
    }
  }
}

.time {
  width: 280px;
  height: 30px;
  // border: solid red 1px;
  margin: 0 -125px;
}
h6 {
  text-align: left;
  line-height: 30px;
  font-size: 13px;
  color: hsla(4, 100%, 66%, 1);
  span {
    float: right;
    color: #fff;
    background: hsla(4, 100%, 67%, 1);
    padding: 0 12px;
    border-radius: 20px;
    font-size: 12px;
  }
}
</style>