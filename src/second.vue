
<template>

            <div class="secondB">
                second
            </div>

</template>

<style>

    .secondB{ background: burlywood;width: 100%;
        height: 100%;}
</style>

<script scoped>
    export default {
        beforeRouteEnter(to, from, next) {
            console.log('B beforeRouteEnter')
            next()
        },
        beforeRouteUpdate(to, from, next) {
            console.log('B beforeRouteUpdate')
            next()
        },
        beforeRouteLeave(to, from, next) {
            console.log('B beforeRouteLeave')
            next()
        }
    }
</script>