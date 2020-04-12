import axios from 'axios'
import get from 'lodash/fp/get'
import isArray from 'lodash/fp/isArray'
import httpErrorCodes from './helpers/httpErrorCodes'

axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
}

const apiClient = axios.create({
  baseURL: 'http://192.168.1.71:8080',
  timeout: 100000,
})

apiClient.interceptors.response.use(get('data'), err => {
  /* eslint-disable no-param-reassign */
  let messageList = ''

  if (err.response) {
    err.status = err.response.status
    err.title = httpErrorCodes[err.response.status]
    err.code = err.response.code
    if (err.status === 401) {
      window.location.href = '/login'
    } else if (isArray(err.response.data.errors)) {
      err.response.data.errors.forEach(error => {
        messageList = `${messageList}${error.code}: ${error.localizedMessage}\n`
      })
      err.message = messageList
    } else {
      err.message = 'Server Error'
    }
  } else if (err.code === 'ECONNABORTED') {
    err.status = 0
    err.title = 'Connection Issues'
    err.message =
      'Either something is wrong with your internet connection or MSE is having issues'
  } else {
    err.status = 0
    err.title = 'Error'
  }
  /* eslint-enable no-param-reassign */

  return Promise.reject(err)
})

export default apiClient
