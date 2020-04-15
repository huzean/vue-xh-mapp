<template>
  <div>
    <div class="Predictionof" v-for="(item, index) in mianshou" :key="index">
      <span>
        <p>{{item.mathematics}}</p>
        <h5>
          {{item.springtime}}
          <h6>{{item.sprint}}</h6>
        </h5>
      </span>
      <ul class="Predictionof-ul">
        <li>{{item.interest}}</li>
        <li>{{item.date}}</li>
        <div>
          <h4>
            <img v-for="(item, index) in msimg" :key="index" :src="item.img" alt />
          </h4>
          <div v-for="(item, index) in headportrait " :key="index">
          <span>
            <a href>{{item.texta}}</a>
            <a href>{{item.textb}}</a>
            <a href>{{item.textc}}</a>
          </span>
          <span id="price">
            <a href>￥</a>
          {{item.price}}
            <a href>起</a>
          </span>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mianshou: [
        {
          mathematics: "面授-数学",
          springtime: " 2020春季高一数学创新B班里滢星",
          sprint: "期五冲刺班",
          interest: "激发兴趣，塑造能力",
          date: "报续周期：2019.1215 - 2020.01.22"
        }
      ],
      msimg: [
        { img: require("../../assets/examl.png") },
        {
          img: require("../../assets/examl.png")
        },
        {
          img: require("../../assets/examl.png")
        }
      ],
      headportrait:[
        {
          texta:"刘吴然",
          textb:"张东来",
          textc:"史密夫",
          price:"1889"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
.Predictionof {
  width: 337px;
  height: 200.5px;
  border-radius: 8px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  margin-top: 10px;
  // border: solid red 1px;
  span {
    display: inline-block;
    vertical-align: middle;
    margin-top: 18px;
  }
  p {
    width: 57px;
    height: 15px;
    margin-top: -5px;
    display: inline-block;
    vertical-align: middle;
    background: #9b7bef;
    border-radius: 5px;
    font-size: 11px;
    line-height: 15px;
  }
  h5 {
    width: 250px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    color: rgba(51, 54, 75, 1);
    line-height: 20px;
    h6 {
      margin-left: -280px;
      padding-top: 13px;
      line-height: 1px;
    }
  }
}
.Predictionof-ul {
  li {
    font-size: 13px;
    color: #8e919e;
  }
  li:nth-child(1) {
    width: 313px;
    height: 19px;
    // border:solid red 1px;
    line-height: 19px;
    margin-top: 25px;
    display: flex;
    justify-content: end;
    margin-left: 15px;
  }
  li:nth-child(2) {
    width: 313px;
    height: 19px;
    // border:solid red 1px;
    line-height: 19px;
    margin-top: 5px;
    display: flex;
    justify-content: end;
    margin-left: 15px;
  }
  div {
    margin-top: 5px;
  }
  img {
    width: 30px;
    margin: 8px;
  }
  h4 {
    display: flex;
    justify-content: auto;
    margin-left: 15px;
  }
  span {
    margin-top: -7px;
    display: flex;
    justify-content: end;
    font-size: 10px;
    margin-left: 10px;
  }
  a {
    padding-left: 15px;
    color: #8e919e;
  }
}
#price {
  margin-top: -10px;
  margin-left: 240px;
  color: #ff5d52ff;

  font-size: 18px;

  text-align: center;
  a:nth-child(1) {
    color: #ff5d52ff;
    font-size: 12px;
    line-height: 18px;
  }
  a:nth-child(2) {
    color: #8e919eff;
    font-size: 12px;
    line-height: 15px;
    padding: 3px;
  }
}
</style>
