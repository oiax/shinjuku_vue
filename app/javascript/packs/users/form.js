import Vue from "vue/dist/vue.esm"
import TurbolinksAdapter from "vue-turbolinks"
import VueDataScooper from "vue-data-scooper"

Vue.config.productionTip = false
Vue.use(VueDataScooper)

document.addEventListener("turbolinks:load", () => {
  const element = document.getElementById("user-form")

  if (element) {
    const app = new Vue({
      el: element,
      mixins: [ TurbolinksAdapter ]
    })
  }
})
