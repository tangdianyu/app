import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import wisdom from '../components/wisdom'
import announcement from '../components/announcement'
import news from '../components/newsPath'
import Attendance from '../components/Attendance'
import documentation from '../components/Documentation'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/wisdom',
      name: 'wisdom',
      component: wisdom
    },
    {
      path:"/news",
      name:'news',
      component:news
    },
    {
      path:"/announcement",
      name:'announcement',
      component:announcement
    },
    {
      path:"/Attendance",
      name:'Attendance',
      component:Attendance
    },
    {
      path:"/documentation",
      name:'documentation',
      component:documentation
    }
  ]
})
