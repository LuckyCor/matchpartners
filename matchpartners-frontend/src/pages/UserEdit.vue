<template>
    <van-form @submit="onSubmit">
        <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder=" '请输入'+editUser.editName"
        />
<div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
        提交
    </van-button>
</div>
</van-form>
</template>
<script setup lang="ts">

import {ref} from "vue";
import { useRoute ,useRouter} from "vue-router";
import myAxios from "../plugins/myAxios";
import { Toast } from '@vant/compat';
import { getCurrentUser } from "../services/user";
const route = useRoute();
const router = useRouter();
const editUser = ref({
    editKey:route.query.editKey,
    editName:route.query.editName,
    currentValue:route.query.currentValue,
})
const onSubmit = async()=>{
    //获取用户信息
    const currentUser = await getCurrentUser();

    if(!currentUser){
        Toast.fail('用户登录')
        return;
    }

    const res = await myAxios.post('/user/update',{
        'id':currentUser.id,
        [editUser.value.editKey as string]:editUser.value.currentValue,
    })
    console.log(res,'更新请求')
    if(res.code === 0 && res.data > 0){
        Toast.success('修改成功');
        router.back();
    }else{
        Toast.fail('修改失败');
    }
};

</script>
<style scoped>

</style>