import Axios from 'axios'

const CODEOK = 0
// Vue.prototype.$http = Axios
export function _get (url, params, options) {
  return new Promise(function (resolve, reject) {
    Axios.get(url, { params }).then(function (res) {
      return resolve(res);
    }).catch(function (res) {
      return reject(res)
    });
  })
}

export let jsonDefault = {
  'g_tk': '5381',
  'uin': '0',
  'format': 'json',
  'inCharset': 'utf-8',
  'outCharset': 'utf-8',
  'notice': '0',
  'platform': 'h5',
  'needNewCode': '1'
}

export function getHomePageRecommend (url, params, fn) {
  params = Object.assign({}, jsonDefault, params)
  _get(url, params).then(function (res) {
    if (res.data.code === CODEOK) {
      fn && fn(res.data.data)
    } else {
      console.log(1)
    }
  }).catch(function (err) {
    console.log(err)
  })
}

export function getSingerList (fn) {
  const url = '/v8/fcg-bin/v8.fcg'
  var params = {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1664029744
  }
  params = Object.assign({}, jsonDefault, params)
  _get(url, params).then(function (res) {
    if (res.data.code === CODEOK) {
      fn && fn(res.data.data)
    } else {
      console.log(1)
    }
  }).catch(function (err) {
    console.log(err)
  })
}
