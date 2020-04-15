<template>
    <div>
        <Head v-for="(item,index) in title " :key="index" :title="item.text"></Head>
    </div>
    <!-- ============ -->
     

</template>
<script>
import Head from "@/components/head/head"
export default {
      data(){
        return {
            isshow:true,
            title:[
                {text:"学习"}
            ],
        }
    },
    components:{
        Head,
    }
}
</script>
<style lang="">
    
</style>