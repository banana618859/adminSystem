<template>

        <div class="welcom">
            <h3>音乐排行榜 {{name}}</h3>
            <ul>
            	<li v-for="(item,index) in musicFormVuex" :key="item.name" :style="{background: handleColor(item.bg_color)}">
            		<div>
            			<h4>{{item.name}}</h4>
            			<p>{{item.comment}}</p>
            			<table class="musicTable">
            				<tr>
            					<th>专辑id</th>
             					<th>歌曲id</th>
            					<th>歌曲名称</th>
            					<th>作者</th>
            					<th>背景图片地址</th>
            				</tr>
            				<tr v-for="(contentItem,index) in item.content" :key="contentItem.album_id">
            					<td> {{contentItem.album_id}} </td>
            					<td> {{contentItem.song_id}} </td>
            					<td> {{contentItem.title}} </td>
            					<td> {{contentItem.author}} </td>
            					<td> {{contentItem.pic_big}} </td>
            				</tr>
            			</table>
            		</div>
            	</li>
            </ul>
        </div>


</template>


<script>
	import axios from 'axios';
	export default {
		data(){
			return{
				name: this.$store.state.name,
				musicList: []
			}
		},
		filters: {
			cutColor: function(value){
				return value.slice(2,value.length-1)
			}
		},
		mounted(){
			/*
			* 提供2种请求数据方法:(第二种方法最优:推荐)
			*1.直接在页面获取:等页面加载完毕后，调用方法获取数据
			* this.getMusicList();
			*2.通过运用vuex技术,在store里面获取,然后再返回到页面,集中管理数据.
			* this.getMusicListByVuex();
			*/
	        //this.getMusicList();
	        this.getMusicListByVuex();
		},
		computed:{
			musicFormVuex(){
				// 一定要将通过axios方法获取的,来自store里面的,异步的,数据放到computed对象里面获取
				// 因为数据是异步获取的,如果不这样做,页面加载比数据加载快,页面加载完成后,是看不到数据的.
				// 如果看不懂,可直接qq我:804552579
				return this.$store.state.musicL
			}
		},
		methods:{
			handleColor: function(value){
	        	console.log(value);
	        	return value.replace(/0x/,'#')
	        },
		    // 直接向后台获取音乐数据
            getMusicList: function(){
            	// 这里要先将this赋值给that要不等下作用域改变了就不能用了.
            	var that = this;
            	console.log('get-----list----');
            	// 用axios请求数据.
            	axios.get('https://api.apiopen.top/musicRankings')
            	.then(function(res) {
            		console.log(res);
             		console.log(res.data.result);
            		that.musicList = res.data.result;
            	})
            	.catch(function(error) {
            		console.log(error);
            	})
            },
            getMusicListByVuex: function(){
            	console.log('---Vuex get data----');
            	// 触发store里面的actions方法,然后actions方法再触发mutations方法,去获取数据.
            	// 为什么要这样呢?因为axios是异步方法,必须是actions方法,再到mutations方法的.
            	// actions方法是通过dispatch触发的.mutations方法是通过commit触发的.
            	this.$store.dispatch('getMusicListAsync');
            }
		}
	}
</script>

<style scoped>
    .welcom{background: #d2cccc; width: 100%;}
    .welcom li{margin-bottom:15px;}
    h3{padding:5px 10px;}
    h4{padding:5px;}
    p{padding:5px;}
    .musicTable{ border:1px solid #ccc; width:100%; }
    .musicTable th,.musicTable td{ border-bottom:1px solid #ccc; }
    .musicTable td{font-size:14px;}
</style>
