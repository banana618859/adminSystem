<template>
	<div class="login">
		<h3>登录界面：</h3>
		<p><input type="text" class="inpt" v-model="userName" /></p>
		<p><input type="password" class="inpt" v-model="password" /></p>
		<p><a class="login-btn" v-on:click="goApp">登录</a></p>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				userName: '',
				password: ''
			}
		},
		methods: {
			goApp: function(){
				console.log(this.userName+this.password)
				if (this.userName !='' && this.password !='') {
					// 使用vuex通过触发mutations里面的changeUser方法，更新用户名。
					this.$store.commit('changeUser',this.userName)
					this.$router.push('/app')
				}else{
					alert('请随便输入用户名和密码!')
				}
			}
		}
	}

</script>

<style>
	body{background: #e8e4e4;
		position: absolute;
		top:0; right: 0; bottom: 0; left:0;
		display: flex;
		justify-content: center;
		align-items: center; color: #666;
	}
	.login {
		width: 250px;
		background: #fff;
		padding: 15px;	
	}
	.login p{margin-top: 10px;}
	.inpt{width:100%; height: 35px; line-height: 35px; border:1px solid #ccc; padding:5px;}
	.login-btn{border-radius: 3px;background: #ccc; border:none; padding: 8px 15px; cursor: pointer; color: #666; text-decoration:none;display:inline-block;}
</style>