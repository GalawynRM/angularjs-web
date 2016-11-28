/*globals angular, window, document, alert*/
var app = angular.module('app', ['ui.bootstrap', "ngRoute", "ngSanitize", "ngAria", "ngAnimate", "ngTouch", "LocalStorageModule"]);

(function (angular) {
    'use strict';

    app.config(function myAppConfig($routeProvider, $httpProvider, $locationProvider) {

        $httpProvider.interceptors.push('LoadingInterceptor');
    });

    app.controller("appController", function ($window, $log, $filter, $location, $anchorScroll, $scope, $routeParams, $route, $timeout, ConfigService) {
        $scope.navCollapsed = true;

        var config = {
            brand: "",
            credits: "",
            version: "0.0.1"
        };

        $scope.config = config;

        $scope.$route = $route;

        $scope.config = ConfigService;

        $scope.$on("$routeChangeSuccess",
            function handleRouteChangeSuccessEvent(event) {

                $scope.activetab = $route.current.activetab;

                if (typeof $route.current.title !== "undefined") {
                    $scope.service = $route.current.title;

                    document.title = $route.current.title;
                }

                $scope.navCollapsed = true;
            });

        $scope.$on("$viewContentLoaded",
            function handleContentLoadedEvent(event) {
                angular.element("h1.page-info").attr("tabIndex", -1).focus();

            });

        $scope.login = function () {

        };

        $scope.logout = function () {

        };

        $scope.routeGo = function (path) {
            $location.path(path);
        };

        $scope.scrollTo = function (element) {
            $anchorScroll(element);
        };

        $scope.routeNewWindow = function (path) {
            $window.open(path, "_blank");
        };

        $scope.routeRedirect = function (path) {
            $location.path(path).replace();
        };

        $scope.route = function (path, replace) {
            if (replace) {
                $scope.routeRedirect(path);
            } else {
                $scope.routeGo(path);
            }
        };
    });

}(window.angular));
