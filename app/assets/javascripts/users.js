$(document).on("turbolinks:load", function() {
  if ($("form.new_user, form.edit_user").length) {
    var toggleOtherLanguage = function() {
      var language = $("input[name='user[language]']:checked").val()
      var div = $("input[name='user[other_language]']").parent()
      div.toggle(language === "other")
    }

    toggleOtherLanguage()

    $("input[name='user[language]']").on("click", toggleOtherLanguage)
  }
})
