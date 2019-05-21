

<template>
    <div id="app">
        <Header>{{ getTheName }}</Header>
        <LeftMenu 
            :sonMenuList="menus" 
            v-on:listenSonFun="ChanegPage"
        ></LeftMenu>
        <div class="rightMain">
            <div class="page-tab-box">              
                <ul>
                    <li 
                        v-for="(item,index) in rightTabList" 
                        :key="item.tabName"
                        v-on:click="tabChangePage(item)"
                    >
                        <router-link
                            :class="{active: item.isActive}"
                            :datapath="item.tabPath"
                            :to="item.tabPath"
                        >
                            {{item.tabName}}
                        </router-link>
                        <span 
                            class="icon iconfont" v-show="item.tabPath!='/app/'"
                            v-on:click.stop="closeThisPage(item)"
                        >
                            &#xe60c;</span>
                        
                    </li>
                </ul>

            </div>
            <div class="main-container">
                <transition name="fade">
                    <router-view />
                </transition>
            </div>
            <footer>
                copyright@yizheng2019
            </footer>
        </div>

    </div>

</template>
<script>
    import Header from './header.vue'
    import LeftMenu from './leftMenu.vue'
    //import RightMain from './rightMain.vue'
    import routes from './config/routes'
    //引入字体图标css文件
    import './font/iconfont.css'
    // import {mapState} from 'vuex'

        export default {
            data(){
               return{
                 /*tabArr: [
                    {
                        tabName: 'first',
                        tabPath: '/first',
                        isActive:true
                    },
                    {
                        tabName: 'second',
                        tabPath: '/second',
                        isActive:false
                    } 
                 ],*/
                 name: this.$store.state.name,
                 menus: [],
                 rightTabList: [
                    {
                        tabName: '欢迎页面',
                        tabPath: '/app/',
                        isActive: true
                    }
                 ],
                 thePathList: [],
                 newObj:{
                    isActive: '',
                    tabName: '',
                    tabPath: ''
                 }
               }
            },
            mounted(){
                console.log("-----路由：the router------:")
                console.log(routes)
                this.menus = routes[2].children.map(item => {
                    return {
                        pageName: item.pageName,
                        path: item.path,
                        isActive: false
                    }
                })
                this.menus.shift()
                this.menus.shift()
                // console.log(this.menus)
                // 存储单纯的路径数组备用
                this.thePathList = this.menus.map(theItem => {
                    return theItem.path
                }); 
                console.log(this.thePathList)
                // this.rightTabList.shift()   
            },
            computed:{
                getTheName(){
                   return this.$store.getters.getUserInfo;
                }
            },
            methods: {
                // 数组的相关操作方法：
                popTheArr: function(){
                    this.rightTabList.pop()
                },
                shiftTheArr: function(){
                    this.rightTabList.shift()
                },
                closeThisPage: function(item){
                    //console.log(item);
                    if(this.rightTabList.length==1){
                        alert('此项不能关闭!')
                        return
                    }
                    var theArr = this.rightTabList;
                    var theNewArr =[]
                    for(var i=0;i<theArr.length;i++){
                        if(theArr[i].tabPath != item.tabPath){
                            theNewArr.push(theArr[i])
                        }
                    }
                    console.log('--------theNewArr-----初步结果：--');
                    // console.log(theNewArr);
                    // 拷贝对象
                    this.newObj = Object.assign({},theNewArr[theNewArr.length-1])
                    
                    // 设置更改对象属性--$set()方法
                    // this.$set(this.obj,'e',02)
                    this.$set(this.newObj,'isActive',true)
                    console.log(this.newObj.isActive)
                   

                    // 数组的替换方法Array.splice()
                    // theNewArr.splice(theNewArr.length-1,1,this.newObj)
                    this.rightTabList = theNewArr;
                    
                    // 数组后删除方法Array.pop()                   
                    this.rightTabList.pop()
                    // 数组后插入方法Array.push()
                    this.rightTabList.push(this.newObj)
                    console.log(this.rightTabList)

                    // 别名替换
                    var aTab = this.rightTabList;
                    var lastOne = aTab[aTab.length-1];
                    var laOne = aTab.length
                    
                    // 编程式路由跳转
                    this.$router.push(lastOne.tabPath)
                    // vue强制刷新方法
                    //this.$forceUpdate();                    
                },
                tabChangePage: function(item){
                    console.log("----事件冒泡触发了：tabChangePage方法，触发了这里----")
                    this.rightTabList.map((bigItem) => {
                        bigItem.isActive = bigItem.tabPath == item.tabPath ? true : false
                    })
                },
                showPage: function(ev){
                    ev.preventDefault();
                    // 回到原生js，哈哈
                    // console.log(ev.target)
                    var x = ev.target
                    console.log(x.innerHTML.trim())
                    var pagePath = x.getAttribute('datapath')
                    this.$router.push(pagePath);
                    this.tabArr.map((item) => {
                        item.isActive = item.tabPath==pagePath ? true : false
                    })
                },
                ChanegPage: function(item){
                    console.log("父组件收到子传来的数据: ");
                    console.log(item);
                    var thePathMap = this.rightTabList.map(theItem => {
                        return theItem.tabPath
                    });
                    console.log(thePathMap)
                    if(!thePathMap.includes(item.path) && item){
                        this.rightTabList.push({
                            tabName: item.pageName,
                            tabPath: item.path,
                            isActive: false
                        })
                        this.rightTabList.map((faItem) => {
                            faItem.isActive = faItem.tabPath==item.path ? true : false
                        })
                    }else{
                        alert('重复打开了！')
                    }                                 
                       
                }

            },
            components: {
                Header,
                LeftMenu,
               // RightMain
            }
    }
</script>

<style>
    .fr{float:right;}
    .bder-red{border:1px solid red;}
    .page-tab-box{width:100%; height:40px; line-height:40px; padding:5px; border:1px solid green; margin-bottom:10px;}

    .page-tab-box li {
        list-style:none;
        position:relative; padding:0 5px;
        height:30px;line-height:30px;display:inline-block;
    }
    .page-tab-box li a{
        width:100%; height:100%; padding:0 3px;
        display:inline-block; cursor:pointer;text-align:center; background:#ccc; border-radius:3px; float:left; margin-right:15px; text-decoration:none; font-size:14px; color:#666;
    }
    .page-tab-box li .icon{display:none;
        position:absolute; top:-12px; right:-5px; font-weight:bold; cursor:pointer; width:25px;text-align:center; font-size:18px; color:#888;}
    .page-tab-box li:hover .icon{display:block;color:#f00;}
    .page-tab-box li a.active{background:#69f; color:#eee;}
    .rightMain{position: absolute; top:82px;
        left:225px;bottom:0;right: 0;
        border:1px solid #eee;
        overflow:hidden;}
    .main-container{
        overflow:auto;
        position: absolute; top:45px;
        left:0px;bottom:30px;right: 5px;
        border:1px solid #ccc;
    }
    footer{
        position: absolute; width:100%; height:30px;line-height:30px; 
        left:0px;bottom:0px;right: 0;
        background:#eee;text-align:center; font-size:14px;
        color:#ccc;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>


