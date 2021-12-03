import { BASE_URL } from "@/config/global"
import { axios } from '@/util/request'

export const getAccountListApi = (params: object) => {
  return axios({
    url: BASE_URL + '/json/reply/QueryCustomerInfoPageReq',
    method: 'post',
    data: params
  })
}
