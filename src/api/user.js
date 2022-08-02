import request from '@/utils/request'

/***
 * @param {Object} data password mobile
 * @return promise
 */
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

