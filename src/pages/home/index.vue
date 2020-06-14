<template>
  <div class="template-div">
    <Head :title="herdtitle"></Head>
    <header>
      <div class="head">
        <ul class="head-ul-left" v-for="(item,index) in headercontent " :key="index">
          <li class="head-course">{{item.course}}</li>
          <li class="head-wire">{{item.string}}</li>
          <li class="head-city">{{item.loction}}</li>
          <li class="head-grade">{{item.geade}}</li>
          <li class="icon iconfont icon-xiajiantou"></li>
        </ul>
      </div>
    </header>
    <nav>
      <Navigation></Navigation>
    </nav>
    <!-- 轮播 -->
    <Swiper>
      <van-swipe-item v-for="(item, index) in slideshow " :key="index">
        <img :src="item.img" />
      </van-swipe-item>
    </Swiper>
    <div>
      <ul class="middle-course">
        <li v-for="(item, index) in navList" :key="index">
          <img :src="item.icon" alt />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <!-- 中部 -->
    <div class="campus">
      <!-- 1111 -->
      <ul class="images">
        <li v-for="(item, index) in navCard" :key="index">
          <router-link to="/nearbycampus">
            <img :src="item.img" alt />
            <span class="location-one">
              {{item.text}}
              <p>{{item.campus}}</p>
            </span>
          </router-link>
          <span class="location-one">
            {{item.texts}}
            <p>{{item.campuss}}</p>
          </span>
        </li>
      </ul>
    </div>
    <!-- 续报 -->
    <div class="continue-card-box">
      <ul class="head">
        <li>
          <h5>我的续报</h5>
        </li>
        <li class="my-continue-width">
          <div class="border">
            <ul>
              <li>距离报名结束</li>
              <li>立即报名</li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- 倒计时 -->
      <SJ></SJ>
      <Zujian></Zujian>
      <carthd></carthd>
      <div id="box">
        <ul class="boxcart">
          <!-- 1111 -->
          <li class="cart">
            <Flashsale></Flashsale>
            <SJ class="sj"></SJ>
          </li>
          <li class="cart">
<Flashsale></Flashsale>
            <SJ class="sj"></SJ>
          </li>
          <li class="cart">
<Flashsale></Flashsale>
            <SJ class="sj"></SJ>
          </li>
        </ul>
      </div>
      <div class="middleschool">
        <div id="p">
          <span>
            中学
            <a class="dot-a"></a>
            春季课
          </span>
          <span class="examne">
            查看全部
            <a class="icon iconfont icon-shezhi-youjiantou"></a>
          </span>
        </div>
        <div class="exchange">
          <ul>
            <li>
              <img src="../../assets/box.png" alt />
            </li>
            <li>
              <h4>高一学生交流群</h4>
              <p>
                教辅资料
                <a class="dot-a yj"></a> 开学讲座
                <a class="dot-a yj"></a>提分秘籍
              </p>
            </li>
            <li>
              <p>入群</p>
              <p>交流</p>
            </li>
          </ul>
        </div>
      </div>
      <Remediation v-for="(item, index) in mianshou" :item="item" :key="index"></Remediation>

      <Remediation
        background="#000"
        v-for="(item, index) in mian"
        :item="item"
        :key="'info2-'+index"
      ></Remediation>
      <!-- <Zujian></Zujian> -->

      <!-- <Modal :show="show" :title="title" 
       @hideModal="hideModal"
        @submit="submit">      
      </Modal>-->
    </div>
  </div>
</template>
<script>
import Module from "@/pages/classtransfer/module";
import Swiper from "@/components/swiper/index";
import Remediation from "@/components/remediation/index";
import SJ from "@/components/time/SJ";
import Zujian from "@/components/zujian/index";
import Navigation from "@/components/navigation/index";
import Carthd from "@/components/carthd/index";
import Modal from "@/components/popup/modal";
import Head from "@/components/head/head";
import Flashsale from "@/components/flashsale/index";

export default { 
  name: "Date",
  data() {
    return {
      title: "确定转入该班级吗？",
      show: true,
      herdtitle: "首页",
      mianshou: [
        {
          mathematics: "面授-数学",
          springtime: " 2020春季高一数学创新B班里滢星",
          sprint: "期五冲刺班",
          interest: "激发兴趣，塑造能力",
          date: "报续周期：2019.1215 - 2020.01.22",
          price: "1888",
          pricee: "1888",
          msimg: [
            { img: require("../../assets/examl.png"), name: "张东来" },
            {
              img: require("../../assets/examl.png"),
              name: "刘吴然"
            },
            {
              img: require("../../assets/examl.png"),
              name: "史密夫"
            }
          ]
        }
      ],
      //
      mian: [
        {
          mathematics: "面授-英语",
          springtime: " 2019春季高一数学创新a班里滢星",
          sprint: "期六冲刺班",
          interest: "激发兴趣，塑造能力",
          date: "报续周期：20020.1215 - 2020.01.22",
          price: "1899",
          msimg: [
            { img: require("../../assets/examl.png"), name: "刘吴然" },
            {
              img: require("../../assets/examl.png"),
              name: "刘浩然"
            },
            {
              img: require("../../assets/examl.png"),
              name: "刘琪琪"
            }
          ]
        }
      ],
      navList: [
        {
          name: "一对一",
          icon: require("../../assets/exam.png")
        },
        {
          name: "中学班",
          icon: require("../../assets/exam.png")
        },
        {
          name: "学科讲堂",
          icon: require("../../assets/exam.png")
        },
        {
          name: "了解星火",
          icon: require("../../assets/exam.png")
        }
      ],
      carthead: [{ texta: "限时抢购" }, { textb: "查看全部" }],
      headercontent: [
        { course: "选课", string: "|", loction: "中山", geade: "高一" }
      ],
      navigationbars: [
        { text: "精选" },
        { text: "数学" },
        { text: "英语" },
        { text: "语文" },
        { text: "物理" },
        { text: "化学" },
        { text: "生物" },
        { text: "地理" },
        { text: "政治" }
      ], // 11111
      slideshow: [
        { img: require("../../assets/a1.png") },
        { img: require("../../assets/a1.png") },
        { img: require("../../assets/a1.png") }
      ],
      navCard: [
        {
          img: require("../../assets/exam.apng.png"),
          text: "附近校区 ",
          campus: "查找附近校区"
        },
        {
          img: require("../../assets/examb.png"),
          texts: "  课程咨询",
          campuss: "专属学习规划师"
        }
      ]
    };
  },
  components: {
    Swiper,

    SJ,
    Remediation,
    Zujian,
    Navigation,
    Carthd,
    Modal,
    Head,
    Flashsale
  },
  methods: {
    hideModal() {
      this.show = false;
    },
    submit() {
      this.show = false;
    },
    // go(){
    //   this.$router.push('/mine')
    // }
  
  }
  
};
</script>

<style scoped   lang='less'>
#p[data-v-60573688] {
  background: pink !important;
}
.template-div {
  font-family: "微软雅黑";
  background: rgb(248, 249, 252);
}
.head {
  width: 375px;
  height: 48px;
  /* border: solid 1px red; */
  margin: 0 auto;
}
.head-ul-left {
  display: inline;
  line-height: 48px;
  display: flex;
  justify-content: start;
}
.head-course {
  font-size: 23px;
  font-weight: 550;
  color: rgba(51, 54, 75, 1);
  padding-left: 16px;
}
.head-wire {
  padding: 5px 5px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(235, 236, 240, 1);
  line-height: 35px;
}
.head-city {
  font-size: 14px;
}
.head-grade {
  margin-left: 210px;
  font-size: 14px;
  font-weight: 900px;
  color: rgba(51, 54, 75, 1);
  margin-right: 3px;
}

/* 轮播 */
.my-swipe .van-swipe-item img {
  width: 345px;
  height: 110px;
  margin: 0 auto;
  border-radius: 2px;
}
/* 轮播 */
.van-swipe-item {
  width: 100%;
  height: 125px;
  padding: 10px;
  // border:solid red 1px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  margin: 0 auto;
}
.van-swipe__indicators {
  position: absolute;
  bottom: 7px;
  left: 50%;
}
/* 中部 */
.middle-course {
  display: flex;
  justify-content: center;
}
.middle-course li {
  padding-top: 25px;
  padding: 25px 22px 0px 22px;
  /* margin:0 auto; */
}
.middle-course img {
  width: 40px;
}
.middle-course p {
  padding-top: 8px;
  color: rgba(108, 109, 120, 1);
  font-size: 12.4px;
  font-weight: 400;
}
.campus ul {
  display: flex;
  justify-content: center;
}
.campus ul li {
  /* margin-top:20px; */
  padding: 20px 4px;
  position: relative;
}
.images li img {
  width: 165px;
  height: 62px;
}
.location-one {
  width: 100px;
  position: absolute;
  top: 35px;
  left: 3px;
}
.campus span {
  font-weight: bold;
}
.campus span p {
  margin-top: 10px;
  font-size: 10px;
  color: #979cb8;
}
.images .campus-li {
  position: relative;
}
.location-tow {
  position: absolute;
  top: 35px;
  left: 13px;
}

.border ul {
  line-height: 45px;
  display: flex;
  justify-content: space-between;
}
.border ul li {
  color: #b75d23;
  font-size: 13px;
  margin-left: 10px;
}
.border li:nth-child(2) {
  width: 74px;
  height: 26px;
  background: #ff7c4c;
  border-radius: 100px;
  margin: 10px;
  color: #fff;
  font-size: 12px;
  line-height: 26px;
}
.continue-card-box {
  .head {
    .my-continue-width {
      width: 337px;
      height: 58px;
      background: #ffd18c;
      margin: 0 auto;
      border-radius: 8px;
      margin-top: 10px;
      padding-top: 5px;

      .border {
        width: 320px;
        height: 45px;
        margin: 0 auto;
        border: solid 0.6px rgb(193, 193, 199);
        border-radius: 5px;
      }
    }
    h5 {
      padding-bottom: 10px;
      display: flex;
      justify-content: end;
      margin: 10px 0px 10px 20px;
      font-size: 19px;
    }
  }
}
// aa
#box {
  margin: 0 auto;
  width: 375px;
}
.boxcart {
  width: 100%;
  height: 160px;
  margin-right: 200px;
  white-space: nowrap; 
  overflow-y: auto; /*可滑动*/
  margin-left: 20px;
  // border:solid red 1px;

  .cart {
    width: 315px;
    height: 159px;
    background: #fff;
    display: inline-block; /*行内块元素*/
    border-radius: 4px;
    margin: 0 3px;
    vertical-align: middle;

    
  }
}
.middleschool {
  width: 375px;
  height: 150px;
  margin: 0 auto;

  #p {
    display: flex;
    justify-content: space-between;
    padding: 28px 20px;
    span {
      font-size: 19px;
      //  border:solid red 1px;
    }
    .examne {
      font-size: 13px;
      color: hsla(230, 8%, 69%, 1);
      .icon-shezhi-youjiantou:before {
        color: rgba(184, 185, 193, 1);
        font-size: 20px;
        margin-left: -3px;
        vertical-align: middle;
      }
    }
  }
  .exchange {
    width: 343px;
    height: 55px;
    margin: 0 auto;
    background: #ffeeda;
    border-radius: 70px;

    ul {
      display: flex;
      justify-content: space-around;
      line-height: 25px;
      li:nth-child(1) {
        width: 60px;
        margin-top: -4px;
      }
      li:nth-child(2) {
        color: #f57944;
        margin-top: 5px;
        h4 {
          font-size: 15px;
          font-weight: bold;
        }
        p {
          font-size: 10px;
        }
      }
      li:nth-child(3) {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: hsl(4, 100%, 67%);
        text-align: center;
        white-space: normal;
        color: #fff;
        margin-top: 5px;
        line-height: 15px;
        padding: 8px 0px;
        p {
          font-size: 10px;
        }
      }
    }
  }
}
.dot-a {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #000;
  vertical-align: middle;
  margin: 0 3px;
}
.yj {
  background: #f57944;
}
/*自定义滚动条的伪对象选择器, CSS 可以隐藏滚动条*/
.boxcart::-webkit-scrollbar {
  display: none;
}
</style>
