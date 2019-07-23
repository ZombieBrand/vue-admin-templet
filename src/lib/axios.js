import axios from "axios";
import { baseURL } from "@/config";
import { getToken } from "@/lib/uilt";
class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    this.queque = {};
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    };
    return config;
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(
      config => {
        // 添加全局loding
        //Spin.show() 组件全局loding
        if (!Object.keys(this.queque).length) {
          //Spin.show()
        }
        this.queque[url] = true;
        config.headers["Authorization"] = getToken();
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    instance.interceptors.response.use(
      res => {
        //这里添加响应统一处理
        delete this.queque[url];
        const { data, status } = res;
        if (status === 200) {
          //这里做服务器成功响应后根据后台状态码处理
          // switch (data.code) {
          //   case 200:
          //     //做成功提示
          //     break;
          //   default:
          //     //非成功提示
          // }
          return Promise.resolve(res);
        } else {
          return Promise.reject(res);
        }
      },
      error => {
        delete this.queque[url];
        switch (error.response.status) {
          case 404:
            //这里做错误处理
            break;
        }
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
