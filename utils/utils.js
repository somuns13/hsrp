const getValueType = (val) => {
  const type = typeof val
  if (type !== 'object') {
    return type.toLocaleLowerCase()
  }
  return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, '$1').toLocaleLowerCase()
}

/**
 * @name: somuns
 * @description: 获取yyyyMMdd格式时间
 * @param {String} val 需要格式化的时间
 * @param {String} type 格式化后的形式
 * @return {String} 已格式化后的日期
 */
const formatDate = (val, type) => {
  val = val ? val + '' : '' // 确保val为string类型
  type = type ? type.toLocaleLowerCase() : ''
  if (val && val.length === 8 && getValueType(+val) === 'number' && !isNaN(+val)) {
    val = val.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1/$2/$3')
  }
  if (val && val.length === 6 && getValueType(+val) === 'number' && !isNaN(+val)) {
    val = val.replace(/^(\d{4})(\d{1})(\d{1})$/, '$1/$2/$3')
  }
  if (!isNaN(+val) && (val.length === 10 || val.length === 13)) { // 处理时间戳形式的数据
    val = +val
  }
  const date = val ? new Date(val) : new Date()
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let second = date.getSeconds()
  month = month >= 10 ? month : `0${month}`
  day = day >= 10 ? day : `0${day}`
  hours = hours >= 10 ? hours : `0${hours}`
  minutes = minutes >= 10 ? minutes : `0${minutes}`
  second = second >= 10 ? second : `0${second}`

  switch (type) {
    case 'yyyy':
      return `${year}`
    case 'mm':
      return `${month}`
    case 'dd':
      return `${day}`
    case 'yyyymm':
      return `${year}${month}`
    case 'yyyymmdd':
      return `${year}${month}${day}`
    case 'yyyy-mm':
      return `${year}-${month}`
    case 'yyyy-mm-dd':
      return `${year}-${month}-${day}`
    case 'yyyy/mm/dd':
      return `${year}/${month}/${day}`
    case 'yyyy-mm-dd hh:mm:ss':
      return `${year}-${month}-${day} ${hours}:${minutes}:${second}`
    case 'yyyy/mm/dd hh:mm:ss':
      return `${year}/${month}/${day} ${hours}:${minutes}:${second}`
    case 'hh:mm:ss':
      return `${hours}:${minutes}:${second}`
    default:
      if (type) {
        console.error(`不支持 ${type} 类型日期格式化，请检查！`)
      }
      return `${year}-${month}-${day}`
  }
}

const createArrayFn = len => [...new Array(len).keys()]

/**
 * 获取随机字符串
 * @name: somuns
 * @param {number} digit 字符串位数
 * @returns {string} random
 */
const getRandom = (digit = 32) => {
  digit = +digit || 32
  let randomStr = ''
  const charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const rangeList = createArrayFn(digit)
  rangeList.forEach(_ => {
    randomStr += charStr.charAt(Math.floor(Math.random() * charStr.length))
  })
  return randomStr
}

module.exports = {
  getRandom,
  createArrayFn,
  formatDate,
  getValueType
}
