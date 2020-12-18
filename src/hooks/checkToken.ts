import api from '@/api'
import request from '@/utils/request'
import {getCookie} from '@/utils/cookie'
export default function useCheckToken (to,next) {
    async function checkToken () {
        const {path} = to 
        const {status } =await request({
            url: api.tokenApi,
            data: {
                token: getCookie('token')
            }
        })
        if (status==1||path=='/login') {
            next()
        } else {
            next('/login')
        }
    }
    checkToken()
}