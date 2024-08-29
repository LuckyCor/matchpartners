<template>
    <template v-if="user">
  <van-cell title="头像" is-link to="/user/edit" > <img style="height:50px"  :src="user.avatarUrl" @click="toEdit('avatarUrl','头像',user.avatarUrl)"> </van-cell>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.username)"/>
  <van-cell title="性别" is-link to="/user/edit" :value="genderFilter(user.gender)" @click="toEdit('gender','性别',user.gender)" />
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
  <van-cell title="账户" is-link  :value="user.userAccount"/>
  <van-cell title="身份证号" is-link  :value="user.planetCode" />
  <van-cell title="注册时间" is-link  :value="user.createTime" />
  </template>
  </template>
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
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
  const router = useRouter();
  const genderFilter = (gender: number) => {
  return gender === 0 ? '男' : gender === 1 ? '女' : '未知';
}
  onMounted(async () =>{
    const res = await getCurrentUser();
    if (res){
      user.value = res;
      Toast.success('获取用户信息成功');
    } else {
      Toast.fail('获取用户信息失败')
    }
  })
  
  const toEdit = (editKey: string,editName: string,currentValue: string) =>{
    router.push({
      path:'/user/edit',
      query: {
        editKey,
        editName,
        currentValue,
      }
    })
  }
  
  </script>
  
  <style scoped>
  
  </style>