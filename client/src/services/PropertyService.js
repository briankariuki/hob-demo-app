import Api from '@/services/Api'

export default {
    index () {
        return Api().get('/properties')
    },
    post (property) {
        return Api().post('/property', property)
    },
    show (propertyId) {
        return Api().get(`/property/${propertyId}`)
    },
    put (property) {
        return Api().put(`/property/${property.id}`, property)
    },
}