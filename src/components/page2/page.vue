<template>
	<div class="page">
		<v-header :title="title"></v-header>
	</div>
</template>

<script>
import Header from '@/components/header'
export default {
    name: 'page2',
    data:function(){
    	return {
    		title:"page2"
    	}
    },
    components:{
    	"v-header":Header
    }
}
</script>