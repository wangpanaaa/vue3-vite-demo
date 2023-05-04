import { defHttp } from '/@/utils/http/axios'

export function loginApi(params, mode = 'modal') {
  return defHttp.post(
    {
      url: '/login',
      params
    },
    {
      errorMessageMode: mode
    }
  )
}
