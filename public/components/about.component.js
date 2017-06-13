(function() {
  'use strict'

  angular.module('app')
    .component('aboutComponent', {
      templateUrl: '../templates/about.template.html',
      controller: AboutController
    })
console.log("in about component");
  AboutController.$inject = ['$state']

  function AboutController($state) {
    const vm = this
    vm.$onInit = onInit
    function onInit() {
      console.log("in AboutController $onInit function");
      $state.go('about')
    }

    function projects(){
    // ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      $state.go('projects')
    }

    function about(){
    // ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      $state.go('about')
    }
  } // END CONTROLLER
})()
