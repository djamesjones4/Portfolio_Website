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
      // .state({
      //   name: 'nav',
      //   abstract: true,
      //   url: '/',
      //   component: 'navComponent'
      // })
      .state({
        name: 'about',
        url: '/',
        component: 'aboutComponent'
      })
      .state({
        name: 'projects',
        abstract: true,
        component: 'projectsComponent'
      })
      .state({
        name: 'garden',
        url: '/projects/gardengrowers',
        parent: 'projects',
        component: 'garden'
      })
      .state({
        name: 'doctorsNote',
        url: '/projects/doctorsnote',
        parent: 'projects',
        component: 'doctorsNote'
      })
      .state({
        name: 'colors',
        url: 'projects/dothasprettycolors',
        parent: 'projects',
        component: 'colorsComponent'
      })
// END CONFIG FUNCTION
  }
})()
