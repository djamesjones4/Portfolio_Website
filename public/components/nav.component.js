(function() {
  'use strict'

  angular.module('app')
    .component('navComponent', {
      templateUrl: '../templates/nav.template.html',
      controlloer: NavController
    })
    console.log('in nav component');
  NavController.$inject = ['$state']

  function NavController($state) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      // $state.go('nav')
    }

    function projects() {
    // ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      $state.go('projects')
    }

    function about() {
    // ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // $state.go('about')
    }
  }
})()
