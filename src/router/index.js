import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import TodoList from "@/components/TodoList";
//import Combo from '@/components/Combo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/home",
      name: "Index",
      component: Index
    },
    // {
    //   path: "/combo",
    //   name: "Combo",
    //   component: Combo
    // },
    {
      path: "/todo",
      name: "TodoList",
      component: TodoList
    }
  ]
});
