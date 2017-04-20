/**
 * Created by RobertMesschendorp on 19/04/17.
 */
(function () {
    totalHealthTrackApp.directive('thtNavigation', function ($state) {
        return {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: 'app/scripts/directives/thtNavigation/thtNavigation.html',
            css: 'app/scripts/directives/thtNavigation/thtNavigation.css',
            link: function () {

            },
            controller: function ($scope) {

                $scope.icons = [
                    {name: 'restaurant'   , color: "grey", menuitems: {
                        0: "foodShuffle",
                        1: "Categories"
                    },
                    category_title:"Food"}
                    ,
                    {name: 'attach_money'   , color: "grey", menuitems: {
                        0: "Personal Financial Management",
                        1: "Stocks and shares"
                    },
                    category_title:"Finance"},
                    {name: 'fitness_center'   , color: "grey", menuitems: {
                        0: "Running",
                        1: "Fitness"
                    },
                    category_title: "Sports"},
                    {name: 'face'   , color: "grey", menuitems: {
                        0: "moodweb"
                    }, category_title: "Mental"}
                ];

                $scope.navigateTo = function (entity) {
                    console.log(entity);
                    $state.go(entity);
                }

            }
        }
    });
})();