/**
 * Created by Administrator on 2018/6/30 0030.
 */
import * as types from './mutations-type.js'

const mutations = {
  [types.SETSINGERS] (state, data) {
    state.singer = data;
  },
  [types.SETSINGERS2] (state, data) {
    state.singer = data + '2';
  }
}
export default mutations
