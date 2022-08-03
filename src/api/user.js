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
export const getuserinfoApi = () => {
  return request({
    url: '/sys/profile',
    method: 'POST',
  })
}
export const getUserDetail = (id) => {
  return request({
    url: '/sys/user/' + id,
  })
}