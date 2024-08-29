<template>
    <form action="/">
  <van-search
    v-model="searchText"
    show-action
    placeholder="请输入搜索标签"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>

<van-divider content-position="left">已选标签</van-divider>

<div v-if="activeIds.length == 0" >请选择标签</div>

  <van-row gutter="16" style="padding: 0 16px">
    
    <van-col v-for="tag in activeIds" :key="tag.label"> <!--多加了 key="tag.label"-->
      <van-tag  closeable size="small" type="primary" @close="doclose(tag)">
      {{ tag }}
    </van-tag>
  </van-col>
</van-row>



<van-divider content-position="left">已选标签</van-divider>
  <van-tree-select
  v-model:active-id="activeIds"
  v-model:main-active-index="activeIndex"
  :items="tagList"
/>
<div style="padding: 15px;">
<van-button block type="primary" @click="doSearchResult">搜索</van-button>
</div>
</template>
 <script setup>
import { ref } from 'vue';
import { Toast } from '@vant/compat';
import { useRouter } from 'vue-router';
import path from 'path';
const router = useRouter();
const value = ref('');
const searchText = ref();
const doSearchResult = () => {
  router.push({
    path:'/user/list',
    query:{
      tags:activeIds.value
    }
  })
}
//标签列表
const originTagList = [
      {
        text: '性别',
        children: [
          { text: '男', id: '男' },
          { text: '女', id: '女' },
        ],
      },
      {
        text: '年级',
        children: [
          { text: '大一', id:'大一'},
          { text: '大二', id:'大二'},
          { text: '大三', id:'大三'},
          { text: '大四', id:'大四'},
          { text: '大五', id:'大五'},
          { text: '研一', id:'研一'},
          { text: '研二', id:'研二'},
          { text: '研三', id:'研三'},
          { text: '研四', id:'研四'},
        ],
      },
      { text: '学历', 
      children:[
        {text:'专科',id:'专科'},
        {text:'本科',id:'本科'},
        {text:'硕士',id:'硕士'},
        {text:'博士',id:'博士'},
      ]
       },
       { text: '方向', 
      children:[
        {text:'java',id:'java'},
        {text:'python',id:'python'},
        {text:'c',id:'c'},
        {text:'c++',id:'c++'},
        {text:'c#',id:'c#'},
        {text:'html',id:'html'},
        {text:'css',id:'css'},
        {text:'js',id:'js'},
        {text:'go',id:'go'},

      ]
       },
       { text: '运动爱好', 
      children:[
        {text:'篮球',id:'篮球'},
        {text:'足球',id:'足球'},
        {text:'乒乓球',id:'乒乓球'},
        {text:'羽毛球',id:'羽毛球'},
        {text:'排球',id:'排球'},
        {text:'棒球',id:'棒球'},
        {text:'橄榄球',id:'橄榄球'},
        {text:'网球',id:'网球'},
        {text:'足球',id:'足球'},
        {text:'游泳',id:'游泳'},
        {text:'跑步',id:'跑步'},
        {text:'骑行',id:'骑行'},
        {text:'撸铁',id:'撸铁'},
      ]
       },
       { text: '游戏爱好', 
      children:[
        {text:'原神',id:'原神'},
        {text:'王者荣耀',id:'王者荣耀'},
        {text:'三国杀',id:'三国杀'},
        {text:'火影忍者',id:'火影忍者'},
        {text:'和平精英',id:'和平精英'},
        {text:'蛋仔派对',id:'蛋仔派对'},
        {text:'第五人格',id:'第五人格'},
        {text:'DNF',id:'DNF'},
        {text:'金铲铲',id:'金铲铲'},
        {text:'LOL',id:'LOL'},
        {text:'CF',id:'CF'},
        {text:'CSGO',id:'CSGO'},
        {text:'其他',id:'其他'},

      ]
       },
    ];
//标签列表
let tagList = ref(originTagList);
      /**
      *  搜索过滤
      * @param val
      */
      const onSearch = (val) => {
        tagList.value = originTagList.map(parentTag =>{
          const tempChildren =  [...parentTag.children];
          const tempParentTag =  {...parentTag};
          tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
          return tempParentTag;
        })
      };

      //取消  清空
      const onCancel = () => {
        searchText.value = '';
      tagList.value = originTagList;
      };


      //已选中的标签
      const activeIds = ref([]);
      const activeIndex = ref(0);


      //关闭标签
      const  doclose = (tag) =>{
        activeIds.value = activeIds.value.filter(item =>{
          return item !== tag;
        })
                                                
      }

</script> 