/*globals app, window*/
(function (angular, app) {
    'use strict';

    function formatDate(value) {
       //return value.getDate() + "/" + value.getMonth()+1 + "/" + value.getFullYear();

        var today = value, dd = today.getDate(), mm = today.getMonth() + 1, yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '/' + mm + '/' + yyyy;
    }

    app.filter('html', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        };
    });

    app.filter('myFilter', function () {
        return function (items, search) {

            if (search !== '' && typeof search !== "undefined") {
                var result = [];


                angular.forEach(items, function (value, key) {
                    angular.forEach(value, function (value2, key2) {

                        if (value2 == search) {
                            if (result.indexOf(value) < 0) { result.push(value); }
                        } else if (("" + value2).toLowerCase().indexOf(("" + search).toLowerCase()) >= 0) {
                            if (result.indexOf(value) < 0) { result.push(value); }
                        } else {
                            if (formatDate(new Date(value2)).indexOf(search) >= 0) {
                                if (result.indexOf(value) < 0) { result.push(value); }
                            }
                        }
                    });
                });
                return result;
            }
            return items;
        };
    });

}(window.angular, app));
