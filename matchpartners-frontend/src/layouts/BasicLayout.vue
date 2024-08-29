<template>
<van-nav-bar
  :title="title"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
>
<template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>

<div id="content">

  <router-view />
      </div>
      <van-tabbar route @change="onChange">
      <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
      <van-tabbar-item to="/team" icon="friends-o" name="team">队伍</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o" name="user">个人</van-tabbar-item>
      </van-tabbar>



</template>


<script setup>
import {ref} from 'vue';
import {Toast} from "@vant/compat";
import { useRouter } from 'vue-router';
import 'vant/es/toast/style';
const router = useRouter()
import routes from '../config/route';
const DEFAULT_TITLE = '随机匹配';
const title = ref(DEFAULT_TITLE);
/**
 * 根据路由切换标签
 */
router.beforeEach((to,from)=>{
  const toPath = to.path;
  const route = routes.find((route)=>{
    return toPath == route.path;
  })
  title.value = route?.title ?? DEFAULT_TITLE;
})




const onClickLeft = () => {router.back()};
const onClickRight = () => {router.push('/search')}

</script>
<style scoped>
#content{
  padding-bottom: 50px;
}

</style>