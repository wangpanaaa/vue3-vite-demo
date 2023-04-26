import { cloneDeep, isEqual, mergeWith, unionWith } from 'lodash-es'
import { isArray, isObject } from '/@/utils/is'

export function openWindow(url, opt) {
  const { target = '__blank', noopener = true, noreferrer = true } = opt || {}
  const feature = []

  noopener && feature.push('noopener=yes')
  noreferrer && feature.push('noreferrer=yes')

  window.open(url, target, feature.join(','))
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl, obj) {
  let parameters = ''
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&'
  }
  parameters = parameters.replace(/&$/, '')
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}

/**
  递归合并两个对象。
  Recursively merge two objects.
  @param target 目标对象，合并后结果存放于此。The target object to merge into.
  @param source 要合并的源对象。The source object to merge from.
  @returns 合并后的对象。The merged object.
 */
export function deepMerge(target, source) {
  return mergeWith(cloneDeep(target), source, (objValue, srcValue) => {
    if (isObject(objValue) && isObject(srcValue)) {
      return mergeWith(cloneDeep(objValue), srcValue, (prevValue, nextValue) => {
        // 如果是数组，合并数组(去重) If it is an array, merge the array (remove duplicates)
        return isArray(prevValue) ? unionWith(prevValue, nextValue, isEqual) : undefined
      })
    }
  })
}
