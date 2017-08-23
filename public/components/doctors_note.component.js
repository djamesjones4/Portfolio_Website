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
      $state.go('doctorsNote')
    }
  }
  // ^^END CONTROLLER^^
})()
