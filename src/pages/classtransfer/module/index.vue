<template>
  <div id="box">
    <ul class="nav-title">
      <li
        v-for="(item,index) in tabList"
        :key="index"
        :class="num==index?'changeColor':''"
        @click="changetab(index)"
      >
        {{item.title}}
        <p :class="num==index?'box':''"></p>
      </li>
    </ul>
    <div class="tabContent">
      <div class="discountse" v-for="(item,index) in list" :key="'info2-'+index">
        <div class="content">
          <span>
            <p id="text">
              {{item.miansou}}
              <a class="dot-a"></a>
              {{item.textb}}
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
                <a @click="showAlert">{{item.select}}</a>
              </div>
            </ul>
          </span>
        </div>
      </div>
    </div>
    <window @close="show=false" @confirm="show=false" :show="show"></window>
  </div>
</template>
<script>
import window from "@/components/popup/window";
export default {
  data() {
    return {
      show: false,
      num: ""
    };
  },
  created(){
    
  },
  components: {
    window
  },
  props: {
    // item: { type: Object },
    tabList: { type: Array },
    list: { type: Array }
  },
  methods: {
    showAlert() {
      this.show = true;
    },
    changetab(idx) {
      this.num = idx;
      this.$emit("tabChange", idx);
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
.discountse {
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
// // 弹窗
// .modal-bg {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 10;
//   // display: none;
// }
// .modal-container {
//   width: 290px;
//   height: 134px;
//   background: #fff;
//   border-radius: 9px;
//   overflow: hidden;
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }
// .modal-header {
//   height: 56px;
//   font-size: 18px;
//   color: #000;
//   display: flex;
//   justify-content: center;
//   line-height: 100px;
//   cursor: move;
// }
// .modal-footer {
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   height: 57px;

//   div {
//     width: 50%;
//     height: 50px;
//     line-height: 50px;
//     border-top: 1px solid #ddd;
//     border-right: 1px solid #ddd;
//     font-size: 16px;

//     div:nth-child(2) {
//       border-right: none;
//     }
//   }
// }
// .modal-footer button {
//   width: 100px;
// }
// .modal-main {
//   padding: 15px 40px;
// }
</style>