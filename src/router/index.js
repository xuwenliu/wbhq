import Vue from 'vue'
import Router from 'vue-router'
import managerPersonalManagement from '@/components/personalManagement/managerPersonalManagement'
import addManager from '@/components/personalManagement/addManager'
import managerAppellation from '@/components/personalManagement/managerAppellation'
import managerPowerAllot from '@/components/personalManagement/managerPowerAllot'
import goodsOrderDetails from '@/components/goodsManage/goodsOrderDetails'
import teamBillManage from '@/components/goodsManage/teamBillManage'

Vue.use(Router)

export default new Router({
  	routes: [
  		{path:'/',redirect:{name:'teamBillManage'}},
  		{path: '/managerPersonalManagement',name: 'managerPersonalManagement',component: managerPersonalManagement},
  		{path: '/addManager',name: 'addManager',component: addManager},
  		{path: '/managerAppellation',name: 'managerAppellation',component: managerAppellation},
  		{path: '/managerPowerAllot',name: 'managerPowerAllot',component: managerPowerAllot},
  		{path: '/goodsOrderDetails',name: 'goodsOrderDetails',component: goodsOrderDetails},
  		{path: '/teamBillManage',name: 'teamBillManage',component: teamBillManage},
  	]
})
