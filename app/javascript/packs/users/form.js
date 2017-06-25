import Vue from "vue/dist/vue.esm"
import TurbolinksAdapter from "vue-turbolinks";

Vue.config.productionTip = false

document.addEventListener("turbolinks:load", () => {
  const query = document.querySelector.bind(document)
  const element = document.getElementById("user-form")

  if (element) {
    const name = query("[v-model='user.name']").value
    const language = (query("[v-model='user.language']:checked") || {}).value
    const other_language = query("[v-model='user.other_language']").value

    const app = new Vue({
      el: element,
      data: {
        user: {
          name,
          language,
          other_language
        }
      },
      mixins: [ TurbolinksAdapter ]
    })
  }
})
