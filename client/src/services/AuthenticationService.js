import Api from '@/services/Api'

export default {
  registertenant (credentials) {
    return Api().post('register/tenant', credentials)
  },
  registerlandlord (credentials) {
    return Api().post('register/landlord', credentials)
  },
  logintenant(credentials) {
    return Api().post('login/tenant', credentials)
  },
  logintenantgoogle(credentials) {
    return Api().post('login/tenant/auth/google', credentials)
  },
  loginlandlord(credentials) {
    return Api().post('login/landlord', credentials)
  },
  loginadmin(credentials) {
    return Api().post('login/admin', credentials)
  },
  landlordindex() {
    return Api().get('/landlords')
  },
  tenantindex() {
    return Api().get('/tenants')
  }
}