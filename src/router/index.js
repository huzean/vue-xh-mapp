import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import mine from '@/pages/home/mine'
import study from '@/pages/home/study'
import scro from '@/pages/home/scro'
import discountcoupon from '@/pages/home/discountcoupon'
import nearbycampus from '@/pages/nearbyCampus'
import classtransfer from '@/pages/classtransfer'
import Selecttheclass from '@/pages/Selecttheclass'
import fu from'@/demo/fu'
import Theorderlist from'@/pages/indent/Theorderlist'
 

Vue.use(Router)

export default new Router({
  routes: [  
      { path: "/home", component:index },
      { path: "/mine", component:mine },
      { path: "/study", component:study },
      { path: "/scro", component:scro },
      { path: "/discountcoupon", component:discountcoupon },
      { path: "/nearbycampus", component:nearbycampus },
      { path: "/classtransfer", component:classtransfer },
      { path: "/Selecttheclass", component:Selecttheclass },
      { path: "/fu", component:fu},
      { path: "/Theorderlist", component:Theorderlist},
     
     
    

      {
        path:'/*',
        redirect:'/home'

      }
      
  ]
})
