<template>
  <template v-if="user">
<van-cell title="头像" is-link  > <img style="height:50px"  :src="user.avatarUrl" /> </van-cell>
<van-cell title="昵称" is-link :value="user.username"/>
<van-cell title="账户" is-link  :value="user.userAccount"/>
<van-cell title="修改信息" is-link to="/user/update"/>
<van-cell title="我创建的队伍" is-link to="/team/create"/>
<van-cell title="我加入的队伍" is-link to="/team/join"/>

</template>

</template>
<script setup lang="ts">
import { onMounted,ref } from 'vue';
import { Toast } from '@vant/compat';
import { getCurrentUser } from '../services/user';
// const user = {
//     id :1,
//     username : '科尔',
//     userAccount : 'cor',
//     avatarUrl : 'https://ts1.cn.mm.bing.net/th/id/R-C.aea0caca25438b7490305cd4c704d515?rik=CVZQWHyHXFsOWw&riu=http%3a%2f%2fimg.touxiangwu.com%2fzb_users%2fupload%2f2022%2f10%2f202210031664760564866293.jpg&ehk=2qNx8uUX1iiCdQWzIRTNFUvkaQL71hkevC%2bK%2b12lgIY%3d&risl=&pid=ImgRaw&r=0',
//     gender : '男',
//     phone : '12315',
//     email : 'xxx@163.com',
//     planetCode : '423303199902156541',
//     createTime : new Date(),
// }
const user =ref();

;
onMounted(async () =>{
  const res = await getCurrentUser();
  if (res){
    user.value = res;
    Toast.success('获取用户信息成功');
  } else {
    Toast.fail('获取用户信息失败')
  }
})
</script>

<style scoped>

</style>