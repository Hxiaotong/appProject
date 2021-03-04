import axios, { AxiosRequestConfig } from 'axios'
import { apiDataTirmFilter } from '@uitls/common.js'

// 接口
interface Config extends AxiosRequestConfig {
    allowLoading?: boolean
}
class Request {
    // 字段
    protected service: any = axios
    protected headerConfig(userInfo: any) {
        return {
            ...userInfo,
            'Content-Type': 'application/json',
        }
    }

    // 构造函数
    constructor() {
        this.service = axios.create()
    }


    // 方法 —— 请求参数配置
    protected requestConfig():void {
        
    }
    // 添加请求拦截器
    protected interceptorsRequest() {
        
    }
    // 添加响应拦截器
    protected interceptorsResponse() {
        
    }
    // get请求
    public get(url:string, data:any={}, config: Config = {}) {
        apiDataTirmFilter(data);
        const result = this.service({
            method: 'get',
            url: url,
            params: data,
            ...config
        })
        return result.data
    } 
    // post请求
    public post(url:string, data:any={}, config: Config = {}) {
        apiDataTirmFilter(data);
        const result = this.service({
            method: 'get',
            url: url,
            data: data,
            ...config
        })
        return result.data
    }
    // post from-data请求
    public async postFormData(url: string, data: any = {}, config: Config = { headers: {}, allowLoading: true },) {
        const { allowLoading } = config;
        config.headers = {
          allowLoading,
          ...{ 'content-type': 'multipart/form-data' },
        };
        let fData = new FormData();
        for (let key in data) {
          fData.append(key, data[key]);
        }
        data = fData;
        apiDataTirmFilter(data);
        const result = await this.service.post(`${url}`, data, config);
        return result.data;
    }
}
export default Request