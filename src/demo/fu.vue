<template>
  <div>
    <div>
      <input v-model="inputvalue" />
      <button @click="handleSubmit">提交</button>
    </div>
    <zi v-for="(item,index) in list" 
    :key="index" :content="item"  @delete="handleDelete" :index="index"></zi>
  </div>
</template>
<script>
import zi from "@/demo/zi";
export default {
  data() {
    return { 
      inputvalue: "",
      list:[], 
    };
  },
  methods: {
    handleSubmit: function() {
      this.list.push(this.inputvalue);
      this.inputvalue = "";
    },
    handleDelete:function(index){
 this.list.splice(index,1)

    }
  },
  components: {
    zi
  }
};
</script>
<style lang="less">
    span li{
        display:inline-block;
        padding:10px 50px;
    }
</style>