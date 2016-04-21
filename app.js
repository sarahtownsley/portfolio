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
    }).when("/contact", {
        templateUrl: "Templates/contact.html",
        controller: "ContactController"
    });
});

app.controller("AboutController", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {

    $scope.name = "about";
    $scope.scrollToAboutSection = function () {
        $location.hash('about-section');
        //        $anchorScroll();
        console.log($location.hash());
        $(window).scrollTo($("#about-section"), 1000, {
            offset: -60
        });

    }

}]);

app.controller("ProjectsController", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {

    $scope.name = "projects";
    $scope.scrollToProjectSection = function () {
        $location.hash('project-section');
        //        $anchorScroll();
        console.log($location.hash());
        $(window).scrollTo($("#project-section"), 1000, {
            offset: -60
        });

    }

}]);

app.controller("EducationController", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {

    $scope.name = "education";

}]);

app.controller("ContactController", ["$scope", "$location", function ($scope, $location) {

    $scope.name = "contact";
}]);