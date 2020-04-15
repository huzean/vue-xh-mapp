<template>
  <div id="box">
    <Head v-for="(item,index) in title " :key="index" :title="item.text"></Head>
    <ul class="nav-title">
      <li
        v-for="(item,index) in Listnav"
        :key="index"
        :class="num==index?'changeColor':''"
        @click="tabs(index)"
      >
        {{item.text}}
        <p :class="num==index?'box':''"></p>
      </li>
    </ul>
    <!--  -->

    <div class="tabContent">
      <!--:key="'info2-'+index" -->
      <div
        class="discounts"
        v-for="(item,index) in  tabcon"
        :key="'info2-'+index"
        v-show="index==num"
      >
        <div class="content">
          <span>
            <p id="text">
              {{item.English}}
              <a class="dot-a"></a>
              {{item.text}}
            </p>
            <i class="character">{{item.introduce}}</i>
            <h6 class="site">
              <svgIcon iconName="icondizhi" />
              {{item.site}}
            </h6>
            <a class="time">
              <svgIcon iconName="iconshijian" />
              {{item.time}}
            </a>
            <ul class="picture">
              <li>
                <img :src="item.img" />
              </li>
              <li>
                <div>{{item.name}}</div>
                <div>{{item.names}}</div>
              </li>
              <div class="select">
                <a href>{{item.select}}</a>
              </div>
            </ul>
          </span>
        </div>
      </div>
    </div>
    <br>
 <!--  -->
  <div class="tabContent">
      <!--:key="'info2-'+index" -->
      <div
        class="discounts"
        v-for="(item,index) in  tabcon"
        :key="'info2-'+index"
        v-show="index==num"
      >
        <div class="content">
          <span>
            <p id="text">
              {{item.English}}
              <a class="dot-a"></a>
              {{item.text}}
            </p>
            <i class="character">{{item.introduce}}</i>
            <h6 class="site">
              <svgIcon iconName="icondizhi" />
              {{item.site}}
            </h6>
            <a class="time">
              <svgIcon iconName="iconshijian" />
              {{item.time}}
            </a>
            <ul class="picture">
              <li>
                <img :src="item.img" />
              </li>
              <li>
                <div>{{item.name}}</div>
                <div>{{item.names}}</div>
              </li>
              <div class="select">
                <a href>{{item.select}}</a>
              </div>
            </ul>
          </span>
        </div>
       
      </div>
      <!--  -->
    </div>
    <!--  -->
  </div>
</template>
<script>
import Head from "@/components/head/head";

export default {
  name: "",
  data() {
    return {
      max: 0,
      isOpen: false,
      num: "",
      title: [{ text: "我的优惠券" }],
      Listnav: [{ text: "面授" }, { text: "双师" }],

      tabcon: [
        {
          English: "英语",
          text: "面授",
          introduce: "2020年春季六年级英语压轴突破班做换行处理最多不超过2行",
          site: "岗顶教学点",
          time: "2019.12.15-2020.01.22 10:00-12:00",
          img: require("../../assets/examl.png"),
          name: "刘然然",
          names: "授课",
          select: "选择班级"
        },
        {
          English: "英语",
          text: "面授",
          introduce: "2019年春季初一级英语压轴突破班做换行处理最多不超过2行",
          site: "岗顶教学点",
          time: "2019.12.15-2020.01.22 10:00-12:00",
          img: require("../../assets/examl.png"),
          name: "张然然",
          names: "授课",
          select: "选择班级"
        }
      ]
    };
  },
  components: {
    Head
  },
  methods: {
    tabs(index) {
      this.num = index;
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
  //  display: flex;
  // align-items: center;
  margin: 0 auto;
  .content {
    span {
      width: 313px;
      height: 200px;
      margin: 18px auto;
      display: inline-block;
      // border: solid red 0.1px;
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