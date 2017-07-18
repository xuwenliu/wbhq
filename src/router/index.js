import Vue from 'vue'
import Router from 'vue-router'
import managerPersonalManagement from '@/components/personalManagement/managerPersonalManagement'
import addManager from '@/components/personalManagement/addManager'
import managerAppellation from '@/components/personalManagement/managerAppellation'
import managerPowerAllot from '@/components/personalManagement/managerPowerAllot'

Vue.use(Router)

export default new Router({
  	routes: [
  		{path:'/',redirect:{name:'managerPersonalManagement'}},
  		{path: '/managerPersonalManagement',name: 'managerPersonalManagement',component: managerPersonalManagement},
  		{path: '/addManager',name: 'addManager',component: addManager},
  		{path: '/managerAppellation',name: 'managerAppellation',component: managerAppellation},
  		{path: '/managerPowerAllot',name: 'managerPowerAllot',component: managerPowerAllot},
  	]
})
