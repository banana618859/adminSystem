<template>

        <div class="firstB">
            first
        </div>


</template>

<style scoped>

    .firstB{background: #bce0d4; width: 100%;
    height: 100%;}
</style>

<script>
    export default {
        // 导航守卫 之 组件守卫:3个
        beforeRouteEnter(to, from, next) {
            console.log('A beforeRouteEnter')
            next()
        },
        beforeRouteUpdate(to, from, next) {
            console.log('A beforeRouteUpdate')
            next()
        },
        beforeRouteLeave(to, from, next) {
            console.log('A beforeRouteLeave')
            next()
        }
    }
</script>