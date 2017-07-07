import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Page1 from '@/components/page1/page'
import Detail from '@/components/page1/detail'
import Page2 from '@/components/page2/page'
import Page3 from '@/components/page3/page'
import Page4 from '@/components/page4/page'

Vue.use(Router);
var router = new Router({
  	routes: [{
  		path:"/",
  		name:"main",
		component:Main,
		redirect:'/page1',
		children:[{
	      	path: '/page1',
	      	name: 'Page1',
	      	component: Page1
	    },{
	      	path: '/page2',
	      	name: 'Page2',
	      	component: Page2
	    },{
	      	path: '/page3',
	      	name: 'Page3',
	      	component: Page3
	    },{
	      	path: '/page4',
	      	name: 'Page4',
	      	component: Page4
	    }]
  	},{
  		path:"/detail/:id",
  		name:"page_detail",
  		component:Detail
  	}]
});
export default router;
