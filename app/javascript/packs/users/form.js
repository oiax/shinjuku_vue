import Vue from "vue/dist/vue.esm"
import TurbolinksAdapter from "vue-turbolinks";

Vue.config.productionTip = false

document.addEventListener("turbolinks:load", () => {
  const elements = document.querySelector(".new_user, .edit_user")

  if (elements) {
    const name = document.querySelector("[v-model='user.name']").value
    const language = document.querySelector("[v-model='user.language']:checked")
    const other_language =
      document.querySelector("[v-model='user.other_language']").value

    const app = new Vue({
      el: elements,
      data: {
        user: {
          name: name,
          language: language ? language.value : undefined,
          other_language: other_language
        }
      },
      mixins: [ TurbolinksAdapter ]
    })
  }
})
