(function() {
  'use strict'

  angular.module('app')
    .component('doctorsNote', {
      templateUrl: '../templates/doctors_note.template.html',
      controller: DoctorsController
    })
  DoctorsController.$inject = ['$state']

  function DoctorsController($state) {
    console.log('in dnote controller')
    const vm = this
    vm.$onInit = onInit
    function onInit() {
    }

    function projects() {
    // ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      $state.go('projects')
    }

    function about() {
    // ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      $state.go('about')
    }
    function gardern() {
      $state.go('garden')
    }
  }
  // ^^END CONTROLLER^^
})()
