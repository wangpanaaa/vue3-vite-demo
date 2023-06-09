import { useMessage } from '/@/utils/useMessage.jsx'

// import { useUserStoreWithOut } from '/@/store/modules/user'
// import projectSetting from '/@/setting/projectSetting'
// import { SessionTimeoutProcessingEnum } from '/@/enums/appEnum'

import { api } from '/@/enums/sys.js'
const { createMessage, createErrorModal } = useMessage()
// const error = createMessage?.error
// const stp = projectSetting.sessionTimeoutProcessing

export function checkStatus(status, msg) {
  // const userStore = useUserStoreWithOut()
  let errMessage = ''

  switch (status) {
    case 400:
      errMessage = `${msg}`
      break
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      // userStore.setToken(undefined)
      errMessage = msg || api.errMsg401
      // if (stp === SessionTimeoutProcessingEnum.PAGE_COVERAGE) {
      //   // userStore.setSessionTimeout(true)
      // } else {
      //   // userStore.logout(true)
      // }
      break
    case 403:
      errMessage = api.errMsg403
      break
    // 404请求不存在
    case 404:
      errMessage = api.errMsg404
      break
    case 405:
      errMessage = api.errMsg405
      break
    case 408:
      errMessage = api.errMsg408
      break
    case 500:
      errMessage = api.errMsg500
      break
    case 501:
      errMessage = api.errMsg501
      break
    case 502:
      errMessage = api.errMsg502
      break
    case 503:
      errMessage = api.errMsg503
      break
    case 504:
      errMessage = api.errMsg504
      break
    case 505:
      errMessage = api.errMsg505
      break
    default:
  }

  if (errMessage) {
    // if (errorMessageMode === 'modal') {
    //   createErrorModal({ title: api.errorTip, content: errMessage })
    // } else if (errorMessageMode === 'message') {
    //   error({ content: errMessage, key: `global_error_message_status_${status}` })
    // }
  }
}
