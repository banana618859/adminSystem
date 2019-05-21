import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		name: "tom",
		musicL: []
	},
	mutations:{
		changeUser(state,username){
			state.name = username
		},
		getMusicListAsyncMt(state){
			// var that = this; //这一步很关键,关于this作用域的问题,如果你使用箭头函数就不用这一句.
			axios.get('https://api.apiopen.top/musicRankings')
			.then(function(res){
				console.log('-------store里面获取的数据------')
				console.log(res)
				console.log(res.data.result)
				state.musicL = res.data.result;
			})
			.catch(function(error){
				console.log(error)
			})
		}
	},
	actions:{
		getMusicListAsync({commit}){
			commit('getMusicListAsyncMt')
		}
	},
	getters:{
		getUserInfo(state){
			return "欢迎: "+state.name;
		}
	}
})

export default store;