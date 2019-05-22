import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    tenant: null,
    landlord: null,
    admin: null,
    isTenantLoggedIn: false,
    isLandlordLoggedIn: false,
    isAdminLoggedIn: false
  },
  mutations: {
    setTenantToken (state, token) {
      state.token = token
      if (token) {
        state.isTenantLoggedIn = true
      } else {
        state.isTenantLoggedIn = false
      }
    },
    setLandlordToken (state, token) {
      state.token = token
      if (token) {
        state.isLandlordLoggedIn = true
      } else {
        state.iLandlordLoggedIn = false
      }
    },
    setAdminToken (state, token) {
      state.token = token
      if (token) {
        state.isAdminLoggedIn = true
      } else {
        state.isAdminLoggedIn = false
      }
    },
    setTenant (state, tenant) {
      state.tenant = tenant
    },
    setLandlord (state, landlord) {
      state.landlord = landlord
    },
    setAdmin (state, admin) {
      state.admin = admin
    }
  },
  actions: {
    setTenantToken ({commit}, token) {
      commit('setTenantToken', token)
    },
    setLandlordToken ({commit}, token) {
      commit('setLandlordToken', token)
    },
    setTenant ({commit}, tenant) {
      commit('setTenant', tenant)
    },
    setLandlord ({commit}, landlord) {
      commit('setLandlord', landlord)
    },
    setAdminToken ({commit}, token) {
      commit('setAdminToken', token)
    },
    setAdmin ({commit}, admin) {
      commit('setAdmin', admin)
    }
  }
})
