(function() {
  'use strict'

  angular.module('app').config(config)

// DEPENDENCY INJECTION INTO CONFIG
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    // Setting clean URLs (no hashtags)
    $locationProvider.html5Mode(true)
    $stateProvider
    // DEFINING ADDITIONAL STATES FOR Single-Page-Application
      .state({
        name: 'about',
        url: '/',
        component: 'aboutComponent'
      })
      .state({
        name: 'projects',
        url: '/projects/dothasprettycolors',
        component: 'projectsComponent'
      })
      .state({
        name: 'garden',
        url: '/projects/gardengrowers',
        component: 'garden'
      })
      .state({
        name: 'doctorsNote',
        url: '/projects/doctorsnote',
        component: 'doctorsNote'
      })
// END CONFIG FUNCTION
  }
})()
