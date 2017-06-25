import Vue from "vue/dist/vue.esm"
import TurbolinksAdapter from "vue-turbolinks";

Vue.config.productionTip = false

document.addEventListener("turbolinks:load", () => {
  const elements = document.querySelector(".new_user, .edit_user")

  if (elements) {
    const app = new Vue({
      el: elements,
      data: {
        user: {
          name: "",
          language: undefined,
          other_language: ""
        }
      },
      mixins: [ TurbolinksAdapter ]
    })
  }
})
