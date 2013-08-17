requirejs.config({
    baseUrl: 'js',
    paths: {
        handlebars: 'libs/handlebars.runtime',
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'
    },
    shim: {
      'handlebars': {
        'exports': 'Handlebars'
      },
      'jquery': {
        'exports': '$'
      }

    }
});