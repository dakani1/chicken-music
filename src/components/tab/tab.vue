<template>
    <div class="tabNav">
        <ul class="tabNavUl">
            <router-link tag="li" to="/recommend"><span>推荐</span></router-link>
            <router-link tag="li" to="/singer"><span>歌手</span></router-link>
            <router-link tag="li" to="/rank"><span>排行</span></router-link>
            <router-link tag="li" to="/search"><span>搜索</span></router-link>
        </ul>
    </div>
</template>

<script type="es6">
export default {
}
</script>

<style scoped lang="scss" rel="stylesheet/sass">
@import "common/sass/variable.scss";
.tabNavUl{
    display: flex;
    display: -webkit-flex;
    li{
        flex: 1;
        text-align: center;
        cursor: pointer;
    }
    .router-link-active{
       span{
            color: $color-theme;
            padding-bottom:3px;
            display:inline-block;
            border-bottom: 2px solid $color-theme;
       }
    }
}
</style>
