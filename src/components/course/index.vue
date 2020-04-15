<template>
  <div class="template-div">
    <header>
      <div class="head">
        <ul class="head-ul-left">
          <li class="head-course">选课</li>
          <li class="head-wire">|</li>
          <li class="head-city">中山</li>
          <li class="head-grade">高一</li>
          <li class="icon iconfont icon-xiajiantou"></li>
        </ul>
      </div>
    </header>
    <nav>
      <div>
        <ul class="tab-head">
          <li class="tab-head-item font-color">精选</li>
          <li class="tab-head-item">数学</li>
          <li class="tab-head-item">英语</li>
          <li class="tab-head-item">语文</li>
          <li class="tab-head-item">物理</li>
          <li class="tab-head-item">化学</li>
          <li class="tab-head-item">生物</li>
          <li class="tab-head-item">地理</li>
          <li class="tab-head-item">政治</li>
          <li class="move"></li>
        </ul>
      </div>
    </nav>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/a1.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/a1.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/a1.png" />
      </van-swipe-item>
    </van-swipe>

    <div>
      <ul class="middle-course">
        <li>
          <img src="../../assets/exam.png" alt />
          <p>1对1</p>
        </li>
        <li>
          <img src="../../assets/exam.png" alt />
          <p>中学班</p>
        </li>
        <li>
          <img src="../../assets/exam.png" alt />
          <p>学科讲堂</p>
        </li>
        <li>
          <img src="../../assets/exam.png" alt />
          <p>了解星火</p>
        </li>
      </ul>
    </div>
    <!-- 中部 -->
    <div class="campus">
      <ul class="images">
        <li>
          <img src="../../assets/exam.apng.png" alt />
          <span class="location-one">
            附近校区
            <p>查找附近校区</p>
          </span>
        </li>
        <li class="campus-li">
          <img src="../../assets/examb.png" alt />
          <span class="location-tow">
            课程咨询
            <p>专属学习规划师</p>
          </span>
        </li>
      </ul>
    </div>
    <!-- 续报 -->
    <div class="To-continue">
      <ul class="my-continue">
        <li>
          <h5>我的续报</h5>
        </li>
        <li class="my-continue-width">
          <div class="border">
            <ul>
              <li>
                距离报名结束
                <span>11</span>
              </li>
              <li>立即报名</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<style>
/* @import "../stylecss/default.css"; */

.template-div {
  font-family: "微软雅黑";
  background: #fefefe;
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
/* nav */
.tab-head {
  width: 360px;
  height: 40px;
  list-style-type: none;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  /* background:#FF4878; */
  padding: 0;
  overflow: auto;
  /* border:solid 1px red; */
  margin: 0 auto;
  margin-top: 5px;
}
::-webkit-scrollbar {
  width: 0px;
}
.tab-head-item {
  height: 40px;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  color: #000;
  font-size: 17px;
  padding: 0 12px;
  line-height: 40px;
  font-weight: 500;
}
.tab-head li:hover {
  color: rgba(149, 108, 222, 1);
}
/* .font-color{
 color:rgba(149,108,222,1);
      } */
/*  */
.move {
  /* height:; */
  width: 25px;
  border-bottom: 4px solid rgba(149, 108, 222, 1);
  border-radius: 5px;
  position: absolute;
  left: 360px;
  top: 95px;
  margin-left: 24px;
  /* transition: left .2s ease-in-out 0s;
    -webkit-transition: left .2s ease-in-out 0s;
    -moz-transition: left .2s ease-in-out 0s; */
  /* -o-transition: left .2s ease-in-out 0s; */
}
li:nth-child(1):hover ~ .move {
  /*li元素的父元素的第一个子元素，当鼠标停留其上时，move元素的left属性改变*/
  left: 0px;
}
li:nth-child(2):hover ~ .move {
  left: 58px;
}
li:nth-child(3):hover ~ .move {
  left: 116px;
}
li:nth-child(4):hover ~ .move {
  left: 174px;
}
li:nth-child(5):hover ~ .move {
  left: 232px;
}
li:nth-child(6):hover ~ .move {
  left: 290px;
}
li:nth-child(7):hover ~ .move {
  left: 348px;
}
li:nth-child(8):hover ~ .move {
  left: 406px;
}
li:nth-child(9):hover ~ .move {
  left: 550px;
}
/* 轮播 */
.my-swipe .van-swipe-item {
  color: red;
}
.my-swipe .van-swipe-item img {
  width: 345px;
  height: 110px;
  margin: 0 auto;
  border-radius: 2px;
}
/* 轮播 */
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
.my-continue-width {
  width: 337px;
  height: 58px;
  background: #ffd18c;
  margin: 0 auto;
  border-radius: 8px;
  padding-top: 5px;
}
/* 续报 */
.my-continue-width > .border {
  width: 320px;
  height: 45px;
  margin: 0 auto;
  border: solid 1px rgb(196, 186, 171);
  /* line-height: 45px; */
  border-radius: 5px;
}
.my-continue li h5 {
  display: flex;
  justify-content: end;
  margin: 10px 0px 10px 25px;
  font-size: 19px;
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
/* .my-continue-width .border .apply{
   width: 74px;
  height: 26px;
  background: #FF7C4C;
  border-radius: 100px;
  margin:10px -90px;
  color:#fff;
  font-size:12px;
  line-height: 27px; 
}  */
</style>