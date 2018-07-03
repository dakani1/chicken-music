import oJsonp from 'jsonp'
const Jsonp = function (url, data, options) {
  return new Promise((resolve, reject) => {
    if (data) {
      url += (url.indexOf('?') < 0 ? '?' : '&') + makeUrl(data)
    }
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
export default Jsonp