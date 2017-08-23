(function() {
  'use strict'

  angular.module('app')
    .component('colorsComponent', {
      templateUrl: '../templates/colors.template.html',
      controller: ColorsController
    })
  ColorsController.$inject = ['$state']
  function ColorsController($state) {
    let vm = this
    vm.onInit = onInit
    function onInit() {
      $state.go('colors')
    }
  }
})()
