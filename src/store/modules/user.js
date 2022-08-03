import { login, getuserinfoApi, getUserDetail } from '@/api/user'
import { setTokenTime } from '@/utils/auth';
export default {
  namespaced: true,
  state: {
    token: "",
    userinfo: {}
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setuserinfo(state, payload) {
      state.userinfo = payload;
    }
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload);
      context.commit("setToken", res);
      setTokenTime()
    },
    async getuserinfo(context) {
      const userBaseInfo = await getuserinfoApi()
      const userInfo =await getUserDetail(userBaseInfo.userId)
      context.commit('setuserinfo',{...userBaseInfo,...userInfo})
    },
     logout(context){
      context.commit('setToken','')
      context.commit('setuserinfo','')
    }
  },
};
