import { getPhoneLogin } from '@/request/api/home';
import { getMusicLyric } from '@/request/api/item';
import { createStore } from 'vuex'

export default createStore({
  state: {
    playList:[{  //播放列表
      al:{
        id: 147207482,
        name: "玫瑰凭证",
        pic: 109951167603798530,
        picUrl: "https://p1.music.126.net/fISwJ705Y1c81EqWxKjNqg==/109951167603798520.jpg",
        pic_str: "109951167603798520",
      },
      id:1959667345,
      name:"给你一瓶魔法药水"
    }],
    playListIndex:0,//默认下标
    isbtnShow:true,  //暂停
    detailShow:false,//歌曲详情页显示
    lyricList:{},//歌词部分
    currentTime:0,//当前时间
    duration:0,//歌曲总时长
    isLogin:false,//判断是否登录
    isFooterMusic:true,//判断底部组件是否需要显示

  },
  getters: {
  },
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value
    },
    updatePlayList:function(state,value){
      state.playList=value
      console.log(state.playList);
    },
    pushPlayList(state, value){
      state.playList.push(value)
    },
    updatePlayListIndex(state,value){
      state.playListIndex=value
    },
    updateDetailShow(state){
      state.detailShow=!state.detailShow
    },
    updateLyricList(state,value){
      state.lyricList=value
    },
    updateCurrentTime(state,value){
      // console.log(state.currentTime)
      state.currentTime=value
    },
    updateDuration(state,value){
      state.duration=value
    },
    updateIsLogin(state,value){
      state.isLogin=true
    },
    updateToken(state,value){
      state.token=value
      localStorage.setItem('token',state.token)
    }
  },
  actions: {
    async getLyric(context,value){
      let res=await getMusicLyric(value)
      context.commit("updateLyricList",res.data.lrc)
    },
    async getLogin(context,value){
      let res=await getPhoneLogin(value);
      return res;
    }
  },
  modules: {
  }
})
