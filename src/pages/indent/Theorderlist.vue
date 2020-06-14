<template >
  <div class="red">
    <Head :title="title"></Head>
    <ul class="nav-title">
      <li
        :class="index==nowIndex?'changeColor':''"
        v-for="(item,index) in tabList"
        :key="index"
        @click="toggleTab(index)"
      >
        {{item.title}}
        <p :class="index==nowIndex ?'box':''"></p>
      </li>
    </ul>
    <Contenta v-for="(item, index) in list1" :item="item" :key="index" v-show="nowIndex==0"></Contenta>
    <Contentb
      v-for="(item, index) in list2"
      :item="item"
      :key="'info2-'+index"
      v-show="nowIndex==1"
    ></Contentb>
    <Contentc
      v-for="(item, index) in list3"
      :item="item"
      :key="index+3"
      v-show="nowIndex==2"
    ></Contentc>
  </div>
</template>
<script>
import Head from "@/components/head/head";
import Contenta from "@/pages/indent/Contenta";
import Contentb from "@/pages/indent/Contentb";
import Contentc from "@/pages/indent/Contentc";
export default {
  data() {
    return {
      title: "订单列表",
      inall: "9999",
      isShow: false,
      nowIndex: "",
      tabList: [{ title: "全部"  }, { title: "待支付" }, { title: "已支付" }],

      list1: [
        {
          number: "   订单编号：283987898756111111111",
          cancelb: "已取消",
          content: [
            {
              miansou: "面授",
              introduce:
                "高一英语科目春季短期班实验类预备2班的名字很长很长很长的时候最多2行超出用…",
              cancel: "岗顶教学",
              time: "2019.12.15-2020.01.22 10:00-12:00",
              teacher: "刘昊然",
              prage: "3600"
            }
          ]
        },
        {
          number: "   订单编号：283987898756522222222",
          cancelb: "已取消",
          content: [
            {
              miansou: "面授",
              introduce: "高一英语春季短期班实验类预备2班",
              cancel: "石牌桥教学",
              time: "2019.12.15-2020.01.22 10:00-12:00",
              teacher: "刘昊然",
              prage: "3800"
            },
            {
              miansou: "面授",
              introduce: "高一英语春季短期班实验类预备2班",
              cancel: "岗顶教学",
              time: "2019.12.15-2020.01.22 10:00-12:00",
              teacher: "刘昊然",
              prage: "3800"
            },
            {
              miansou: "面授",
              introduce: "高一英语春季短期班实验类预备2班",
              cancel: "岗顶教学",
              time: "2019.12.15-2020.01.22 10:00-12:00",
              teacher: "刘昊然",
              prage: "3800"
            }
          ]
        }
      ],
      list2: [
        {
          number: "   订单编号：283987898756111111111",
          cancelb: "待支付",
          content: [
            {
              miansou: "面授",
              introduce: "高一英语科目春季短期班实验类预备2",
              cancel: "岗顶教学",
              time: "2019.12.15-2020.01.22 10:00-12:00",
              teacher: "刘昊然",
              prage: "3600"
            }
          ]
        },
        {
          number: "   订单编号：283987898756522222222",
          cancelb: "待支付",
          content: [
            {
              miansou: "面授",
              introduce:
                "高一英语科目春季短期班实验类预备2班的名字很长很长很长的时候最多2行超出用…",
              cancel: "石牌桥教学",
              time: "2019.12.15-2020.01.22 10:00-12:00",
              teacher: "刘昊然",
              prage: "3600"
            },
            {
              miansou: "面授",
              introduce: "高一英语春季短期班实验类预备2班",
              cancel: "岗顶教学",
              time: "2019.12.15-2020.01.22 10:00-12:00",
              teacher: "刘昊然",
              prage: "3600"
            },
            {
              miansou: "面授",
              introduce: "高一英语春季短期班实验类预备2班",
              cancel: "岗顶教学",
              time: "2019.12.15-2020.01.22 10:00-12:00",
              teacher: "刘昊然",
              prage: "3600"
            }
          ]
        }
      ],
      list3: [{ text: "111" }]
    };
  },
  components: {
    Head,
    Contenta,
    Contentb,
    Contentc
  },

  methods: {
    toggleTab(index) {
      this.nowIndex = index;
    }
  }
};
</script>

<style scoped lang="less">
.red {
  background: #f7f7f7f7;
}
.nav-title {
  width: 375px;
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 0px 0px;
  margin: 0 auto;

  li {
    font-size: 16px;
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
</style>
