<template>
    <div class="iconlist">
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-meirituijian"></use>
          </svg>
          <span>每日推荐</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-diantai"></use>
          </svg>
          <span>私人FM</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-songlist-01"></use>
          </svg>
          <span>歌单</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shujupaihangbang"></use>
          </svg>
          <span>排行榜</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .iconlist{
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: .2rem;
        .iconItem{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: .8rem;
                height: 1rem;

            }
        }
    }
</style>