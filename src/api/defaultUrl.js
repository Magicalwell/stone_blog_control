import { request, getBaseUrl } from '@/api/_service.js'

export function post(url, data) {
  return request({
    url: process.env[getBaseUrl(url)] + url,
    method: 'post',
    data
  })
}
export function get(url, data) {
  return request({
    url: process.env[getBaseUrl(url)] + url,
    method: 'get',
    params: data
  })
}
