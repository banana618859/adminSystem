<template>
    <div class="header">
    	<span class="frBox">
    		<span class="mg-r15"><slot></slot></span>
    		<a href="/logout">退出登录</a>
    	</span>
        后台管理系统
    </div>

</template>

<style>
    .header{position: absolute; left: 0; top: 0;
        width:100%; height:80px;
        line-height: 80px;
        font-size: 28px; color:#eee;
        background:#69f; padding:0 20px; }
    .frBox{float: right; margin-right: 15px; font-size: 16px; color: #eee;}
    .frBox a{font-size: 16px; color: #eee;}
    .mg-r15{margin-right: 15px;}
</style>