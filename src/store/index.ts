import { createStore } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router'
import { asyncRoutes, notFound } from '../router/routes'
interface IState {
  title: string,
  routes: []
}
const store = createStore({
  state (): IState {
    return {
      title: 'hi',
      routes: []
    }
  },
  mutations: {
    SET_TITLE: (state: IState, title) => {
      state.title = title
    },
    SET_ROUTES: (state, routes) => {
      state.routes = routes.concat(notFound)
      state.routes.forEach((route: RouteRecordRaw) => {
        router.addRoute(route)
      })
    }
  },
  actions: {
    loginAction ({commit}, params) {
      console.log(commit, params)
      return new Promise((resolve) => {
        sessionStorage.setItem('isLogin', 'true')
        commit('SET_ROUTES', asyncRoutes)
        resolve(params)
      })
    },
    getRoleAction ({commit}) {
      return new Promise((resolve) => {
        commit('SET_ROUTES', asyncRoutes)
        resolve(asyncRoutes)
      })
    },
  }
})

export default store