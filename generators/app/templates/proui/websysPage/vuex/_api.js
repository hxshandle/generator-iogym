import resource from 'vueResourceConfig'
export default {
  get(url, payload) {
    return resource(url).get(payload)
  },
  post(url, payload) {
    return resource(url).save(payload)
  }
}
