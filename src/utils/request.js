import axios from "axios";
import { Toast } from "vant";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 10000*60, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (config.method == "get") {
      config.params = config.data;
    }
    return config;
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      Toast(res.msg || "系统开小差了，请稍后重试~~");
      return Promise.reject(res.msg || "Error");
      // return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    Toast(error.message || "系统开小差了，请稍后重试~~");
    return Promise.reject(error.message);
  }
);

export default service;
