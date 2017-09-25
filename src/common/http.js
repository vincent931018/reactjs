import axios from 'axios'

var mode = 0; //0:本地 1:测试;
//调试模式开启

// axios 配置
axios.defaults.timeout = 10000;
if (mode === 0) {
    axios.defaults.baseURL = 'http://localhost:8082';
} else if (mode === 1) {
    axios.defaults.baseURL = 'http://192.168.3.242:8360'; //chen
}

// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        let errResult = {
            isSuccess: 0,
            errorCode: '0000',
            errorMsg: '连接服务器失败',
            result: null
        }
        return Promise.reject(errResult);
    });

export default axios;