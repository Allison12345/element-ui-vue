import Vue from 'vue'

export const useComponents = array => {
  array.forEach(element => {
    Vue.use(element)
  })
}
