import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Content from '../components/Content'
import About from '../components/About'
import Submit from '../components/Submit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/submit',
        name: 'Submit',
        component: Submit
    }
  ],
  mode: "history"//干掉地址栏里边的#号键
})

//src/router/index.js(router的主要配置文件)