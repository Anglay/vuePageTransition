<template>
	<div class="nabbar-content">
		<span class="nav-item"><router-link to="/page1">page1</router-link></span>
		<span class="nav-item"><router-link to="/page2">page2</router-link></span>
		<span class="nav-item"><router-link to="/page3">page3</router-link></span>
		<span class="nav-item"><router-link to="/page4">page4</router-link></span>
	</div>
</template>
<style type="text/css">
	.nabbar-content{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		border-top: 1px solid #2c3e50;
		height: 50px;
		line-height: 50px;
	}
	.nav-item{
		display: inline-block;
		width: 25%;
		text-align: center;
		float: left;
	}
	.nav-item a{
		color: #2c3e50;
		text-decoration: none;
	}
	.nav-item a.router-link-exact-active{
		color: #3399FF;
	}
</style>