<template>
    <ItemMusicTop :playlist="state.playlist"/>
    <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>
<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import {getMusicItemList, getItemList} from '@/request/api/item.js'
import ItemMusicTop from '@/components/item1/ItemMusicTop.vue'
import ItemMusicList from '@/components/item1/ItemMusicList.vue'
export default {
    setup(){
        const state=reactive({
            playlist:{},
            itemList:[]//歌单的歌曲
        })
        onMounted(async ()=>{
            let id = useRoute().query.id;
            let res = await getMusicItemList(id);
            state.playlist = res.data.playlist;
            let result=await getItemList(id);
            state.itemList=result.data.songs
            sessionStorage.setItem("itemDetail", JSON.stringify(state));
        });
        return {state}
    },
    components:{
        ItemMusicTop,
        ItemMusicList
    }
}
</script>