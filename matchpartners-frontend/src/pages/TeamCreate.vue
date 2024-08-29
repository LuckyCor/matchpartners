<template>
    <div id="teamcreate">
     <van-search v-model="searchText" placeholder="搜索队伍" clearable="true" @search="onSearch"/>
 <team-card-list :teamList="teamList"/>
 <van-empty v-if="teamList.length <1" description="数据为空"/>
    </div>
 
 
 </template>
 <script setup>
 import { onMounted } from 'vue';
 import { useRouter } from 'vue-router';
 import myAxios from '../plugins/myAxios';
 import { searchProps, Toast } from 'vant';
 import { ref } from 'vue';
 const router = useRouter();
 const doJoinTeam = () =>{
     router.push({
         path:"/team/add"
     })
 }
 
 const teamList = ref([]);
 //队伍搜索方法
 const listTeam = async(val = '')=>{
     const res = await myAxios.get("/team/list/my/create" ,{
         params:{
             searchText:val,
             pageNum:1,
         },
     });
 
 if(res?.code === 0){
     teamList.value = res.data;
 }else{
     Toast.fail("加载队伍失败")
 }
 }
 //页面加载时触发查询队伍
 onMounted(async()=>{
 listTeam()
 })
 //搜索
 const onSearch = (val)=>{
     listTeam(val)
 }
 
 </script>
 <style scoped>
 
 </style>