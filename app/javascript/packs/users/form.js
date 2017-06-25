import Vue from "vue/dist/vue.esm"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    el: ".new_user, .edit_user",
    data: {
      user: {
        name: "",
        language: undefined,
        other_language: ""
      }
    }
  })
})
