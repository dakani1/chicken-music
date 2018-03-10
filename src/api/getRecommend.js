import {jsonp, conOption} from '@/common/js/jsonp'

export const getRecommend = function (url, data) {
  jsonp(url, data, conOption).then((data) => {
    if (data.code === 0) {
      return data.slider
    } else {
      return '1'
    }
  }).catch((err) => {
    console.log(err)
  })
}
