<template>
  <div>   
    <div class="NAV">
      <div id="NavSlide">
        <div class="nav">
          <span
            v-for="(item,index) in Listnav"
            :key="index"
           :class="num==index?'changeColor':''" 
            @click="gotoGood(index)">
            {{item.text}}
            <p :class="num==index?'change':''" ></p>
        
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Listnav: [
        { text: "精选" , },
        { text: "数学" },
        { text: "英语" },
        { text: "语文" },
        { text: "物理" },
        { text: "化学" },
        { text: "生物" },
        { text: "地理" },
        { text: "政治" },
   
      ],
      num: ""
    };
  },
  methods: {
    gotoGood(index) {
      this.num = index;
      
    } 
  }
};
</script>
<style scoped >
.changeColor {
  color: rgba(149, 108, 222, 1);
  padding-bottom: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
 
}
.change {
  border-bottom: solid 4px rgba(149, 108, 222, 1);
  border-radius: 4px;
}
#NavSlide {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* border:solid red 1px;   */
  margin: 0 auto; 
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.nav {
  width: 375px;
  margin: 2px 10px;
  display: flex;
  overflow: auto;
}
.nav > span {
  flex-shrink: 0;
  padding: 10px 0px;
  font-size: 16px;
  margin: 0px 12px;
  /* margin:0 auto; */
}
 .nav p{
 margin-top:5px;
 width:20px;
 margin:5px;
} 
</style>
