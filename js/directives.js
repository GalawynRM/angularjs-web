/*globals app, window, showdown*/
(function (angular, app) {
    'use strict';

    app.directive("batchWatch", [function () {
        return {
            require: 'ngModel',
            replace: false,
            scope: {
                options: '=',
                model: '=ngModel'
            },
            link: function (scope, $element, $attrs) {
                scope.scope = scope;
                scope.$watch("model", function (newVal, oldVal) {
                    if (newVal !== oldVal) {
                        newVal.modified = true;
                    }

                }, true);

            }
        };
    }]);

    app.filter('orderObjectBy', function () {
        return function (items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function (item) {
                filtered.push(item);
            });
            filtered.sort(function (a, b) {
                return (a[field] > b[field] ? 1 : -1);
            });
            if (reverse) {
                filtered.reverse();
            }
            return filtered;
        };
    });


}(window.angular, app));
