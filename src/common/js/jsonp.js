import oJsonp from 'jsonp'
export const conOption = {
  'g_tk': 5381,
  'uin': 0,
  'format': 'json',
  'inCharset': 'utf-8',
  'outCharset': 'utf-8',
  'notice': 0,
  'platform': 'h5',
  'needNewCode': 1
}

export const jsonp = function (url, data, options) {
  return new Promise((resolve, reject) => {
    if (data) {
      url += (url.indexOf('?') < 0 ? '?' : '&') + makeUrl(data)
    }
    console.log(url)
    oJsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function makeUrl (data) {
  let url = ''
  for (let key in data) {
    if (data[key]) {
      url += `&${key}=${encodeURIComponent(data[key])}`
    }
  }
  return url ? url.substring(1) : ''
}

