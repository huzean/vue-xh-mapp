<template>
  <div>
    <div class="Predictionof">
      <span>
        <p id="p" :style="stylebg">{{item.mathematics}}</p>
        <h5>
          {{item.springtime}}
          <h6>{{item.sprint}}</h6>
        </h5>
      </span>
      <ul class="Predictionof-ul">
        <li>{{item.interest}}</li>
        <li>{{item.date}}</li>
        <li id="price">
          <div id="name" v-for="(obj, index) in item.msimg" :key="index">
            <img :src="obj.img" alt />
            <p>{{obj.name}}</p>
          </div>
          <div id="box">
            <a href>￥</a>{{item.price}}<a href>起</a>
          
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      
    };
  },
  props: {
    item: { type: Object },
   background:{type:String}
  },
   computed:{
        stylebg:function(){
            return {
                background:this.background
            }
        }}
        
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
    color: red;
  }
  #p {
    width: 57px;
    height: 15px;
    margin-top: -5px;
    display: inline-block;
    vertical-align: middle;
    background: #9b7bef;
    border-radius: 5px;
    font-size: 11px;
    line-height: 15px;
    color: #fff;
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
  #price {
    width: 313px;
    // border: solid red 1px;
    margin: 0 auto;
    display: flex;

    #name {
      display: inline-block;
      // border: solid red 1px;

      　 p {
        font-size: 8px;
        color: #000;
      }
    }
    #box {
      // border: solid red 1px;
      width: 100px;
      margin-left: 67px;
      margin-top: 30px;
    }
  }
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
  // margin-top: -10px;
  // margin-left: 240px;
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
