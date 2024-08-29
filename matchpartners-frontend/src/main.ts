import { createApp } from 'vue'
import App from './App.vue'
// 1. 引入你需要的组件
import { Button, NavBar,Toast,Icon,Tabbar, TabbarItem} from 'vant';
import * as VueRouter from 'vue-router';
import routes from "./config/route";
// import Vant from 'vant';
import 'vant/lib/index.css';
import './global.css'
const app = createApp(App);
// app.use(Vant);
// 3. 注册你需要的组件
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Toast);
app.use(Tabbar);
app.use(TabbarItem);


const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: VueRouter.createWebHashHistory(),
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
  })

app.use(router)
app.mount('#app')


  





