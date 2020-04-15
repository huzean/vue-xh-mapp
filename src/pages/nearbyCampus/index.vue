<template>
  <div>
    <Head v-for="(item,index) in title " :key="index" v-bind:title="item.text"></Head>
    <div class="content">
      <div class="box">
        <scroller :on-infinite="infinite">
          <div>
            <div class="campucontn" v-for="(item,idx) in list" :key="idx">
              <span>
                {{item.title}}
                <h6>{{item.distance}}</h6>
              </span>

              <div class="site">
                <span>
                  <a>校区地址 :</a>
                  <h6>{{item.address}}</h6>
                  <button>立即咨询</button>
                </span>
                <h6 class="fonthue">
                  <a>咨询电话 ：</a>
                  {{item.phone}}
                </h6>
              </div>
            </div>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>
<script>
import Head from "@/components/head/head";
export default {
  data() {
    return {
      title: [{ text: "附近校区" }],
      list: [
        {
          title: "  星火教育广州岗顶校区",
          address: "广东省广州市天河区天河路号岗顶地铁站旁名称很长换行",
          phone: "400-12345678",
          distance: "3.1km"
        },
        {
          title: "  星火教育广州岗顶校区",
          address: "广东省广州市天河区天河路号岗顶地铁站旁名称很长换行",
          phone: "400-12345678",
          distance: "3.1km"
        },
        {
          title: "  星火教育广州岗顶校区",
          address: "广东省广州市天河区天河路号岗顶地铁站旁名称很长换行",
          phone: "400-12345678",
          distance: "3.1km"
        },
        {
          title: "  星火教育广州岗顶校区",
          address: "广东省广州市天河区天河路号岗顶地铁站旁名称很长换行",
          phone: "400-12345678",
          distance: "3.1km"
        }
      ]
    };
  },
  components: {
    Head
  },
  methods: {
    infinite(done) {
      setTimeout(() => {
        this.list = [...this.list, ...this.list];
        done();
      }, 500);
    }
  }
};
</script>
<style scoped lang="less">
.content {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: url("../../assets/campus.png");
  background-repeat: no-repeat;
  background-size: 100% 146px;
  padding-top: 130px;
  img {
    margin-top: 10px;
    width: 100%;
    height: 146px;
  }
  .box {
    width: 100%;
    border-radius: 15px;
    background: #fff;
    border: solid #fff 1px;
    overflow: hidden;
    height: 100vh;
    position: absolute;
    bottom: 80px;
    top: 130px;
  }
  .campucontn {
    width: 345px;
    height: 110px;
    margin: 18px auto;
    border-bottom: solid rgba(225, 226, 230, 1) 0.5px;
    span {
      display: flex;
      justify-content: space-between;
      line-height: 15px;
      font-size: 15px;
      color: rgba(51, 54, 75, 1);
      font-weight: 400;
      h6 {
        font-size: 12px;
        color: rgba(142, 145, 158, 1);
      }
    }
    .site {
      margin-top: 10px;

      h6 {
        width: 196px;
        color: rgba(142, 145, 158, 1);
        font-size: 13px;
        word-wrap: break-word;
        text-align: left;
        line-height: 18px;
      }
      button {
        width: 66px;
        height: 25px;
        border: solid rgba(160, 117, 235, 1) 1px;
        background: #fff;
        color: rgba(160, 117, 235, 1);
        border-radius: 20px;
        padding: 3px auto;
        font-size: 11px;
        margin-top: 15px;
      }
      a {
        color: rgba(142, 145, 158, 1);
        font-size: 12px;
      }
      .fonthue {
        color: rgba(160, 117, 235, 1);
      }
    }
  }
}
</style>