<template>
  <div>
    <div class="content-box">
      <ul id="Numberone">
        <li class="apartof">
          <span>
            <a>{{ item.number }}</a>
            <p class="text">{{ item.cancelb }}</p>
          </span>
          <ul class="site" v-for="(item, index) in item.content" :key="index">
            <div class="fields">
              <i>{{ item.miansou }}</i>
              {{ item.introduce }}
            </div>
            <li>
              <svgIcon iconName="icondizhi" />
              {{ item.cancel }}
            </li>
            <li>
              <svgIcon iconName="iconshijian" />
              {{ item.time }}
            </li>
            <li class="usname">
              <span>
                <p class="usname-name">
                  <svgIcon iconName="iconcharacter" />
                  授课老师：{{ item.teacher }}
                </p>
                <p>￥{{ item.prage }}</p>
              </span>
            </li>
          </ul>
          <div class="addupto">
            共计{{ texta }}个课程,合计：
            <span>￥{{ inall }}</span>
          </div>
          <div class="payment">{{payment}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      texta: "3",
      inall: "9999",
      payment: "立即支付"
    };
  },
  methods: {
    
  },
  props: {
    item: { type: Object }
  }
};
</script>

<style lang="less" scoped>
.content-box {
  margin: 15px auto;
  width: 351px;
  border: solid #fff 1px;
  border-radius: 10px;
  background: #fff;
  #Numberone {
    margin: 16px auto 19px auto;
    width: 319px;
    .apartof {
      span {
        display: flex;
        color: #5a5a5a;
        padding-top: 15px;
        font-size: 11px;
        padding: 0px;
        justify-content: space-between;

        .text{
          font-size: 12px;
          color: #FC6358;
          font-weight: bold;
        }
      }
      .payment {
        width: 90px;
        margin-top: 16px;
        margin-right: -235px;
        padding: 10px 10px;
        display: inline-block;
        justify-content: flex-end;
        text-align: center;
        color: #fff;
        background: linear-gradient(
          90deg,
          rgba(250, 90, 101, 1) 0%,
          rgba(252, 104, 96, 1) 100%
        );
        border-radius: 30px;
      }
    }
    .fields {
      margin-bottom: 8px;
      text-align: left;
      font-size: 15px;
      line-height: 22px;
      color: #000;
      i {
        width: 20px;

        color: #fff;
        font-size: 11px;
        margin-right: 5px;
        padding: 2px 4px;
        border-radius: 3px;
        vertical-align: middle;
        background: rgba(149, 108, 222, 1);
      }
    }
    .site {
      line-height: 18px;
      margin: 20px 0;
      margin-bottom: 16px;
      color: #8e919e;
      line-height: 21px;
      li {
        display: flex;
        justify-content: end;
        font-size: 12px;
        .svg-icon {
          margin-right: 5px;
          width: 12px;
        }
      }
      .usname {
        border-bottom: solid #f0f1f5 1px;
        .usname-name {
          display: flex;
          justify-content: end;

          font-size: 12px;
          color: #8e919e;
          margin-bottom: 10px;
        }

        span {
          flex: 1;
          justify-content: space-between;
        }
        p {
          display: block;
          color: #33364b;
          font-size: 15px;
        }
      }
    }
    .addupto {
      width: 319px;
      display: inline-flex;
      justify-content: flex-end;
      color: #33364b;
      font-size: 12px;
      span {
        margin: 0px;
        padding: 0px;
        font-size: 15px;
        color: #33364b;
      }
    }
  }
}
</style>
