define([
  'jquery',
  'handlebars',
  'templates/test'
], function($, Handlebars, template) {

  var Home = {}

  Home.render = function() {
    window.console.log("rendering…");

    var data = {
      'method': 'Javascript'
    }

    $('.main').html(Handlebars.templates['js-templates-test'](data))
  }

  return Home;

})