import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
// 创建自定义实例
const ins = axios.create({
    timeout: 20000,
    // baseURL: '' 工作时要加上
})

// 拦截器
ins.interceptors.request.use(function (config) {
    return config
},function (error) {
    return Promise.reject(error)
})
ins.interceptors.response.use(function (res) {
    if (res.status == 200 ) return res.data 
    return res
},function (error) {
    return Promise.reject(error)
})

interface HeadersType {
    'Content-Type': string
}

interface OptionsType {
    url: string,
    method?: string,
    data?: Object,
    headers?: HeadersType
}

export default function request (options:OptionsType): Promise<AxiosResponse<any>>{
    const {url,method = 'GET',data,headers={
        'Content-Type': "application/x-www-form-url-encoded"
    }} = options 
    switch (method.toUpperCase()) {
        case 'GET':
            return ins.get(url,{params: {...data} })
            break;
        case 'POST':
            // json提交
            if (headers['Content-Type'] == 'application/json') {
                return ins.post(url,data,{headers})
            }
            // 文件提交
            if (headers['Content-Type'] == 'multipart/form-data'){
                const p = new FormData()
                for(let key in data) {
                    p.append(key,data[key])
                }
                return ins.post(url,p,{headers})
            }
            // 表单提交
            return ins.post(url,qs.stringify(data),{headers})
            break;
        
        case 'PUT': 
            // put表示修改
            return ins.put(url,data)
            break;
        case 'PATCH':
            // patch表示推送
            return ins.patch(url,data)
            break;
        case 'DELETE':
            // 表示删除
            return ins.delete(url,{data})
            break;
        default:
            return ins(options)
            break;
    }
}
