import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";
import Search from "../pages/Search.vue";
import UserEdit from "../pages/UserEdit.vue";
import SearchResult from "../pages/SearchResult.vue";
import UserLogin from "../pages/UserLogin.vue";
import TeamAdd from "../pages/TeamAdd.vue";
import TeamUpdate from "../pages/TeamUpdate.vue";
import UserUpdate from "../pages/UserUpdate.vue";
import TeamJoin from "../pages/TeamJoin.vue";
import TeamCreate from "../pages/TeamCreate.vue";
const routes = [
    {
        path:'/',component:Index
    },
    {
        path:'/team',title:'寻找队伍',component:Team
    },
    {
        path:'/user',title:'个人信息',component:User
    },
    {
        path:'/search',title:'寻找伙伴',component:Search
    },
    {
        path:'/user/edit',title:'编辑信息',component:UserEdit
    },
    {
        path:'/user/list',title:'匹配列表',component:SearchResult
    },
    {
        path:'/user/login',title:'登录帕特纳',component:UserLogin
    },
    {
        path:'/team/add',title:'创建队伍',component:TeamAdd
    },
    {
        path:'/team/update',title:'更新队伍',component:TeamUpdate
    },
    {
        path:'/user/update',title:'更新信息',component:UserUpdate
    },
    {
        path:'/team/join',title:'加入队伍',component:TeamJoin
    },
    {
        path:'/team/create',title:'创建队伍',component:TeamCreate
    },
    ]
 export default routes;
 