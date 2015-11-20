var app = angular.module("MyPortfolio", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "Templates/about.html",
        controller: "AboutController"
    }).when("/projects", {
        templateUrl: "Templates/projects.html",
        controller: "ProjectsController"
    }).when("/education", {
        templateUrl: "Templates/education.html",
        controller: "EducationController"
    });
});

app.controller("AboutController", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {

    $scope.name = "about";
    $scope.scrollToAboutSection = function () {
        $location.hash('about-section');
//        $anchorScroll();
        console.log($location.hash());
        $(window).scrollTo($("#about-section"), 1000, {offset: -60});
        
    }
    
}]);

app.controller("ProjectsController", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {

    $scope.name = "projects";
    $scope.scrollToProjectSection = function () {
        $location.hash('project-section');
        $(window).scrollTo($("#project-section"), 1000, {offset: -50});
    }
    
}]);

app.controller("EducationController", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {
    
    $scope.name= "education";
    $scope.scrollToEducationSection = function () {
        $location.hash('edcuation-section');
        $(window).scrollTo($("#education-section"), 1000);
    }
    
}]);
