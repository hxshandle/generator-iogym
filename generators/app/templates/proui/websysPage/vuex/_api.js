import resource from 'vueResourceConfig'
export default {
  doSomething () {
    return resource('/404').get({})
  }
}
