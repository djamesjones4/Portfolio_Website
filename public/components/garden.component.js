(function() {
  'use strict'

  angular.module('app')
    .component('garden', {
      templateUrl: '../templates/garden.template.html',
      controller: GardenController
    })
  GardenController.$inject = ['$state']

  function GardenController($state) {
    const vm = this
    vm.$onInit = onInit
    function onInit() {
    }

    function projects(){
    //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
    $state.go('projects')
    }

    function about(){
    //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
    $state.go('about')
    }
  } // END CONTROLLER
})()
