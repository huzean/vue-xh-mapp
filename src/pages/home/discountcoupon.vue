<template>
  <div>
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
        <ul class="left">
          <li>
            <span class="font">
              <a>{{item.text}}</a>
              {{item.price}}
              <p>{{item.discounts}}</p>
            </span>
          </li>
        </ul>
        <ul class="right">
          <li>
            <h5>
              <a>{{item.textb}}</a>
              {{item.coupon}}
            </h5>
            <span class="bordernone">
              {{item.date}}
              <a>{{item.particulars}}</a>
              <span>
                <a v-show="!isOpen && tabcon.length > max" @click="isOpen = !isOpen">
                  <svgIcon iconName="iconxiajiantou1" />
                </a>
                <a v-show="isOpen && tabcon.length > max" @click="isOpen = !isOpen">
                  <svgIcon iconName="iconshangjiantou" />
                </a>
              </span>
            </span>
            <div>
              <ul v-show="isOpen || index < max">
                <li class="value">
                  <span id="span">{{ item.pastdue}}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
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
      Listnav: [{ text: "已使用" }, { text: "已使用" }],

      tabcon: [
        {
          text: "￥",
          price: "300",
          discounts: "满3科可用",
          textb: "面授",
          coupon: "全场通用优惠券",
          date: "  2019.10.10 00:00-2020.1010 00:00",
          particulars: "详情",
          pastdue:
            "使用规则：限星火教育广州分公司2020学年部分产品适用限星火教育广州分公司2020学年部分产品适用。"
        },
        {
          text: "￥",
          price: "400",
          discounts: "满5科可用",
          textb: "面授",
          coupon: "通用优惠券",
          date: "  2019.10.10 00:00-2020.1010 00:00",
          particulars: "详情",
          pastdue:
            "使用规则：限星火教育分20学分公司2020学年部分产品使用2019-2020-10-10"
        }
      ]
    };
  },
  components: {
    Head,
  },
  methods: {
    tabs(index) {
      this.num = index;
    },
    
  }
  
};
</script>

<style scoped lang="less">
.value {
  width: 345px;
  height: 55px;
  margin: 0 auto;
  border-radius: 0px 0px 10px 10px;
  background: rgb(241, 241, 240);
  line-height: 15px;
  //  border:solid red 1px;
  padding: 10px 15px;
  position: absolute;
  top: 200px;
  left: 15px;
  #span {
    width: 315px;
    font-size: 11px;
  }
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
  padding: 25px;
  margin: 0 auto;
  position: relative;
  li {
    font-size: 16px;
  }
}
.tabContent {
  div {
    margin: 0 auto;
  }
}
.discounts {
  width: 345px;
  height: 96px;
  background: rgb(241, 241, 240);
  border-radius: 10px;
  color: rgba(170, 172, 182, 1);
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .left {
    width: 92px;
    height: 97px;
    margin: 0px;
    align-items: center;
    padding-top: 25px;
    //  border:solid red 1px;
    .font {
      font-size: 22px;
      line-height: 22px;
      vertical-align: center;
      a {
        font-size: 15px;
      }
      p {
        font-size: 11px;
      }
    }
  }
  .right {
    .bordernone {
      a {
        border: none;
      }
    }
    width: 253px;
    height: 70px;
    align-items: center;
    text-align: left;
    padding: 0px;
    //  border:solid red 1px;
    li {
      h5 {
        font-size: 15px;
        margin-top: -15px;
        line-height: 60px;
      }
      a {
        font-size: 10px;
        border: solid 0.5px rgba(170, 172, 182, 1);
        padding: 1px 4px;
        border-radius: 2px;
        margin-right: 5px;
      }
    }
    span {
      font-size: 11px;
      line-height: 5px;
      vertical-align: middle;
    }
  }
}
</style>