// Set config defaults when creating the instance
//自定义实例默认值
import axios, { AxiosInstance } from "axios";
const isDev = process.env.NODE_ENV === 'development';
const myAxios : AxiosInstance = axios.create({
    baseURL: isDev? 'http://localhost:8080/api':'',
    // headers:{''},
});

myAxios.defaults.withCredentials = true;
//拦截器
// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("请求发送了",config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    //未登录跳转到登录
 if(response?.data?.code === 40100){
    const redirectUrl = window.location.href;
    window.location.href = '/user/login?redirect=${redirectUrl}';
 }
 return response.data;
},function (error){
    return Promise.reject(error);
});
// 后端接口返回给前端的数据，有其他数据自己另加
interface itfRes {
    code: number
    message: string | undefined
    data: any
}
declare module 'axios' {
    interface AxiosResponse extends itfRes {}
}

export default myAxios;
