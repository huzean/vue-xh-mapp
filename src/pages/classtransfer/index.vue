<template>
  <div id="box">
    <Head :title="title"></Head>
    <Module @tabChange="tabChange" :tabList="tabList" :list="list"></Module>
  </div>
</template>
<script>
import Head from "@/components/head/head";
import Module from "@/pages/classtransfer/module";
export default {
  name: "",
  data() {
    return {
      title: "我的优惠券",
      tabList: [{ title: "双师" }, { title: "面授" }],
      list1: [
        {
          miansou: "面授",
          textb: "英语",
          introduce: "2020年春季六年级英语压轴突破班做换行处理最多不超过6行",
          site: "猎德教学点",
          time: "2019.12.15-2020.01.22 10:00-12:00",
          img: require("../../assets/examl.png"),
          name: "刘小东",
          names: "授课",
          select: "选择班级"
        }
      ],
      list2: [
        {
          miansou: "面授",
          textb: "语文",
          introduce: "2018年春季六年级英语压轴突破班做换行处理最多不超过5行",
          site: "岗顶教学点",
          time: "2019.12.15-2020.01.22 10:00-12:00",
          img: require("../../assets/examl.png"),
          name: "然然",
          names: "授课",
          select: "选择班级"
        }
      ],

      list: []
    };
  },

  components: {
    Module,
    Head
  },
  created() {
    this.list = this.list1;
  },
  methods: {
    tabChange(idx) {
      setTimeout(() => {
        if (idx === 0) {
          this.list = this.list1;
        }
        if (idx === 1) {
          this.list = this.list2;
        }
      }, 500);
    }
  }
};
</script>

<style scoped lang="less">
#box {
  background: rgb(248, 249, 252);
}
svg.svg-icon {
  color: red;
  width: 13px;
  vertical-align: middle;
}
.changeColor {
  color: rgba(149, 108, 222, 1);
}
.box {
  width: 20px;
  margin: 3px auto;
  border-bottom: solid 4px;
  border-radius: 5px;
}
.nav-title {
  width: 375px;
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 10px 0px;
  margin: 0 auto;

  li {
    font-size: 16px;
  }
}
.tabContent {
  margin: 0 auto;
}
.discounts {
  width: 345px;
  height: 233px;
  background: #fff;
  border-radius: 10px;

  box-sizing: border-box;
  top: 0px;
  left: 0;
  right: 0;

  margin: 0 auto;
  .content {
    span {
      width: 313px;
      height: 200px;
      margin: 18px auto;
      display: inline-block;

      text-align: left;
      #text {
        width: 55px;
        font-size: 10px;
        display: inline-block;
        color: #fff;
        padding: 2.5px 0px;
        background: rgba(149, 108, 222, 1);
        text-align: center;
        border-radius: 2px;
      }
      .character {
        font-size: 16px;
        color: #000;
        vertical-align: middle;
        line-height: 24px;
      }
      .site {
        font-size: 12px;
        padding-top: 12px;
      }
      .time {
        display: inline-block;
        font-size: 12px;
        padding-top: 5px;
      }
      .picture {
        width: 100px;
        height: 50px;
        display: block;
        line-height: 14px;
        padding-top: 5px;
        li {
          display: inline-block;
          vertical-align: middle;
          margin: 10px 3px;
          div {
            font-size: 9px;
          }
        }
        img {
          width: 24;
          height: 28px;
        }
        .select {
          width: 313px;
          border-top: solid rgba(255, 255, 255, 1) 1px;
          a {
            padding: 8px 12px;
            font-size: 13px;
            color: #fff;
            background: linear-gradient(
              303deg,
              rgba(255, 100, 89, 1) 0%,
              rgba(255, 134, 107, 1) 100%
            );
            float: right;
            border-radius: 20px;
            margin-top: 10px;
          }
        }
      }
    }
  }
  .dot-a {
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #fff;
    vertical-align: middle;
    margin: 0 3px;
  }
}
</style>
