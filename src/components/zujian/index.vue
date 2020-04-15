<template>
  <div>
    <div class="Predictionof">
      <span>
        <p>面授</p>
        <h5>2020春季一年级语文报名班1</h5>
      </span>
      <div>
        <ul class="Predictionof-ul">
          <li>
            <img src="../../assets/examd.png" alt />
            岗顶教学点
          </li>
          <li>
            <img src="../../assets/exame.png" alt />
            2019.1215-2020.01.22 10:00-12:00
          </li>
          <div>
            <span id="price">
              <div class="headportrait">
                <img src="../../assets/examg.png" alt />              
                <a id="a">
                   星火教师   
                 <h3>授课</h3>
                </a>
              </div>
              <div class="bystages">
                <a href>￥</a>
                <a href>1888</a>
                <a href>分期付</a>
                <a class="icon iconfont icon-xiajiantou"></a>
                <span class="discounts">
                 <h4>满1科减20</h4>
                 <h4>满1科减50</h4>
                 </span>
              </div>
            </span>
          <div class="bd-bottom"></div>
          <span class="Seethecourse">
            共3门特续报课程，查看全部
            <img src="../../assets/exami.png" alt="">
          </span>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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
    margin-top: 15px;
    margin-left: -60px;
  }
  p {
    width: 30px;
    height: 15px;
    margin-top: -5px;
    display: inline-block;
    vertical-align: middle;
    background: #9b7bef;
    border-radius: 5px;
    font-size: 11px;
    line-height: 16px;
  }
  h5 {
    // width: 265px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    color: rgba(51, 54, 75, 1);
    line-height: 20px;
    padding-left: -40px;
  }
}
.Predictionof-ul {
  li {
    font-size: 13px;
    color: #8e919e;
  }
  li:nth-child(1) {
    width: 313px;
    height: 20px;
    // border:solid red 1px;
    line-height: 19px;
    // margin-top: 25px;
    display: flex;
    justify-content: end;
    margin-left: 15px;
    // border:solid red 1px;
  }
  li:nth-child(2) {
    width: 313px;
    height: 20px;
    // border:solid red 1px;
    line-height: 19px;
    margin-top: 5px;
    display: flex;
    justify-content: end;
    margin-left: 15px;
    // border:solid red 1px;
  }
  div {
    margin-top: 5px;
  }
  img {
    width: 19px;
    height: 16px;
    padding-right: 5px;
  }

  h4 {
    display: flex;
    justify-content: auto;
    margin-left: 15px;
  }
  span {
    margin-top: 1px;
    display: flex;
    justify-content: end;
    font-size: 10px;
    margin-left: 10px;
  }
  a {
    padding-left: 15px;
    color: #8e919e;
  }
  .bd-bottom{
    width:313px;
    margin:10px auto;
    border-bottom:solid rgba(240, 241, 245, 1) 1px;
  }
  .Seethecourse{
  color: rgba(180, 182, 194, 1);
  display: flex;
  justify-content: center;
  font-size:13px;
  line-height: 14px;
 
  img{
   width:15px;
    margin-left:2px;
  }
  }
}
#price {
  width: 323px;
  margin-top: 10px;
  color: #ff5d52ff;
  font-size: 18px;
  text-align: center;
  //  border-bottom: 1px red solid;
  display: flex;
  justify-content: space-between;
  a:nth-child(1) {
    color: #ff5d52ff;
    font-size: 12px;
    line-height: 18px;
  }
  a:nth-child(2) {
    font-size: 18px;
    line-height: 18px;
    color: #ff5d52ff;
    color: red;
    padding: 0px;
  }
  a:nth-child(3) {
    font-size: 12px;
    color: rgba(142, 145, 158, 1);
    padding: 0px;
    line-height: 18px;
  }
  a:nth-child(4) {
    font-size: 12px;
    padding-left: 0px;
    line-height: 18px;
  }
  .bystages {
    width: 140px;
    .discounts h4{
      width:70px;
      margin:5px;
      padding:2px 2px;
      border:solid  #ff5d52ff 1px;
      border-radius: 3px;
    }
  }
  .headportrait {
  width:100px;
  height:35px;
  // border:solid red 1px;

  position: relative;
    img {
      width: 30px;
      height: 26px;
      margin-left:-65px;
    }
    #a{
     color: rgba(142, 145, 158, 1);
     font-size:8px;
     line-height:15px;
    position: absolute;
    top:0px;
    left:35px;
      }
      h3{
    margin-left:-14px;
      }
  }
}
</style>
