import Jsonp from 'common/js/jsonp'
import conOption from 'api/config'
const getRecommend = function (url, data) {
  Jsonp(url, data, conOption).then((data) => {
    console.log(data)
    if (data.code === 0) {
      return data.slider
    } else {
      return '1'
    }
  }).catch((err) => {
    console.log('err' + err)
  })
}

export default getRecommend
