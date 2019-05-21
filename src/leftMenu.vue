
<template>
    <div class="leftMenu">
        <p class="menuTitle">菜单栏列表</p>
        <p 
            class="menuItem"
            v-for="(item,index) in sonMenuList"
            :key = "item.pageName"
            v-on:click="sonChangePage(item)"
        ><router-link :to="item.path">{{ item.pageName }}</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        props:['sonMenuList'],
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{
            sonChangePage: function(item){
                if (item.path=='/logout') {
                    return
                }
                this.$emit('listenSonFun',item)
            }
        }
    }
</script>

<style>
    .leftMenu{position: absolute;
    left:0; top:82px; width: 220px;
        bottom: 0px; background: #616161;}
    .menuTitle{padding: 10px; color: #eee; font-size:18px;}
    .leftMenu .menuItem{ width: 100%; }
    .leftMenu a{text-align: center;width: 100%; height:40px; line-height: 40px; display: block; background:#6699ff; margin-bottom: 1px; text-decoration: none;text-decoration: none;color:#eee;}

</style>
