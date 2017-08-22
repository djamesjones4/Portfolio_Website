(function() {
  'use strict'

  angular.module('app')
    .component('projectsComponent', {
      templateUrl: '../templates/projects.template.html',
      controller: ProjectsController
    })
  ProjectsController.$inject = ['$state']

  function ProjectsController($state) {
    const vm = this
    $(".button-collapse").sideNav()
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
    function dnote() {
      $state.go('doctorsNote')
    }
  }
  // ^^END CONTROLLER^^
})()
