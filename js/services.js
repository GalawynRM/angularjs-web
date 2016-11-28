/*globals app, window*/
(function (angular, app) {
    'use strict';

    app.factory("JSONService", function ($q, $log, $http) {
        return {
            getData: function (url, cachepolicy) {
                var defer = $q.defer();
                $http.get(url, {cache : cachepolicy})
                    .success(function (data) {
                        $log.debug(data);
                        defer.resolve(data);
                    })
                    .error(function (data) {
                        $log.error(data);
                    });
                return defer.promise;
            }
        };
    });

    app.factory("FileService", function ($q, $log, $http) {
        return {
            getFile: function (url, cachepolicy) {
                var defer = $q.defer();
                $http.get(url, {cache : cachepolicy})
                    .success(function (data) {
                        $log.debug(data);
                        defer.resolve(data);
                    })
                    .error(function (data) {
                        $log.error(data);
                    });
                return defer.promise;
            }
        };
    });

    /*------------------------------------------------------------*/

    app.service('LoadingInterceptor', ['$q', '$rootScope', '$log', function ($q, $rootScope, $log) {

        var xhrCreations = 0, xhrResolutions = 0;

        function isLoading() {
            return xhrResolutions < xhrCreations;
        }

        function updateStatus() {
            $rootScope.loading = isLoading();
        }

        return {
            request: function (config) {
                xhrCreations += 1;
                updateStatus();
                return config;
            },
            requestError: function (rejection) {
                xhrResolutions += 1;
                updateStatus();
                $log.error('Request error:', rejection);
                return $q.reject(rejection);
            },
            response: function (response) {
                xhrResolutions += 1;
                updateStatus();
                return response;
            },
            responseError: function (rejection) {
                xhrResolutions += 1;
                updateStatus();
                $log.error('Response error:', rejection);
                return $q.reject(rejection);
            }
        };
    }]);

    app.factory("exampleService", function ($q, $log, $http) {
        var data = [], selected;

        return {
            loadData: function (conditions) {
                var defer = $q.defer();
                $http.post("", {cache : false, method: "get", where: conditions})
                    .success(function (data) {
                        $log.debug(data);
                        defer.resolve(data);
                    })
                    .error(function (data) {
                        $log.error(data);
                    });
                return defer.promise;
            },
            getData: function () {
                return data;
            },
            setData: function (items) {
                data = items;
            },
            selectData: function (item) {
                selected = item;
            },
            selectedData: function () {
                return selected;
            },
            addData: function (item) {
                data.push(item);
            },
            saveData: function (items) {
                var defer = $q.defer();
                $http.post("", {cache : false, method: "set", data: items})
                    .success(function (data) {
                        $log.debug(data);
                        defer.resolve(data);
                    })
                    .error(function (data) {
                        $log.error(data);
                    });
                return defer.promise;
            }
        };
    });

}(window.angular, app));


