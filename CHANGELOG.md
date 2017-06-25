shinjuku-vue CHANGELOG
======================

以下、Git のタグ `ver0` からの変更を記録する。

## Webpacker, Vue.js の導入

* `Gemfile` に `webpacker` を追加して `bundle install`
* `rails webpacker:install`
* `rails webpacker:install:vue`
* `touch app/javascript/packs/.keep`
* `rm app/javascript/packs/app.vue`
* `rm app/javascript/packs/*.js`
* `rm app/assets/javascripts/users.js`

## `users/form.js` の作成

* `mkdir -p app/javascript/packs/users`
* `app/javascript/packs/users/form.js` を作成

## ERBテンプレートの書き換え

* `app/views/users/new.html.erb` を編集
* `app/views/users/edit.html.erb` を編集
* `app/views/users/_fields.html.erb` を編集

## `vue-turbolinks` の導入

* `bin/yarn add vue-turbolinks`
* `app/javascript/packs/users/form.js` を編集
* `app/views/users/new.html.erb` を編集
* `app/views/users/edit.html.erb` を編集
* `app/views/layouts/application.html.erb` を編集
