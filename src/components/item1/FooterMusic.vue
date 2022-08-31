<template>
    <div class="FooterMusic">
        <div class="footerLeft" @click="updateDetailShow">
          <img :src="playList[playListIndex].al.picUrl" alt="" />
            <div>
                <p>{{playList[playListIndex].name}}</p>
                <span>横滑可以切换上下首</span>
            </div>
        </div>
        <div class="footerRight">
            <svg class="icon" aria-hidden="true"  @click="play" v-if="isbtnShow">
              <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-else>
              <use xlink:href="#icon-zanting" ></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-24gf-playlistHeart2" ></use>
            </svg>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
        <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%',width:'100%' }" >
            <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow" :addDuration="addDuration"/>
        </van-popup>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import MusicDetail from '@/components/item1/MusicDetail.vue'
export default {
    data(){
        return{
            interVal:0
        }
    },
    computed:{
        ...mapState(["playList","playListIndex","isbtnShow","detailShow"])
    },
    mounted(){
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
    },
    updated(){
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
        this.updateDuration()
    },
    methods:{
        play:function(){
            if(this.$refs.audio.paused){
                this.$refs.audio.play();
                this.updateIsbtnShow(false)
                this.updateTime()//播放就调用函数进行传值
            }
            else{
                this.$refs.audio.pause()
                this.updateIsbtnShow(true)
                clearInterval(this.interVal)//暂停就清除定时器
            }
        },
        addDuration(){
            this.updateDuration(this.$refs.audio.currentTime)
        },
        updateTime(){
            this.interVal=setInterval(()=>{
                this.updateCurrentTime(this.$refs.audio.currentTime)
            },1000)
        },
        ...mapMutations(['updateIsbtnShow','updateDetailShow','updateCurrentTime','updateDuration'])
    },
    watch:{
        playListIndex(){  //如果下标改变，自动播放音乐
            this.$refs.audio.autoplay=true;
            if(this.$refs.audio.paused){   
                this.updateIsbtnShow(false)
            }
        },
        playList(){
            if(this.isbtnShow){
                this.$refs.audio.autoplay=true;
                this.updateIsbtnShow(false)
            }
        }
    },
    components:{
        MusicDetail
    }
}
</script>
<style lang="less" scoped>
.FooterMusic{
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: .2rem;
    justify-content: space-between;
    .footerLeft{
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        span{
            color: #999;
        }
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }
    .footerRight{
            width: 18%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon{
                width: .56rem;
                height: .56rem;
            }
        }
}
</style>