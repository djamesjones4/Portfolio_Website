(function() {
  'use strict';
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'] // DEPENDENCY INJECTION INTO CONFIG
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true) // Setting clean URLs (no hashtags)
    $stateProvider // DEFINING ADDITIONAL STATES FOR Single-Page-Application

      .state({ // 1st STATE (on click in this case)
        name: 'about',
        url: '/',
        component: 'aboutComponent'
      })
      .state({ // 2nd STATE (on click in this case)
        name: 'projects',
        url: '/projects/dothasprettycolors',
        component: 'projectsComponent'
      })
      .state({
        name: 'garden',
        url: '/projects/gardengrowers',
        component: 'garden'
      })

  } // END CONFIG FUNCTION
})()
