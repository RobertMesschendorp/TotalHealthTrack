/**
 * Created by RobertMesschendorp on 18/04/17.
 */
(function () {
    totalHealthTrackApp.controller('MainController', function ($scope) {
        var icons = [
            {name: 'restaurant'   , color: "grey"},
            {name: 'attach_money'   , color: "grey"},
            {name: 'fitness_center'   , color: "grey"},
            {name: ''   , color: "grey"}
        ];

        $scope.sizes = [
        {size:"md-18",padding:0},
        {size:"md-24",padding:2},
        {size:"md-36",padding:6},
        {size:"md-48",padding:10}
      ];

        $scope.fonts = [].concat(icons);
    })
})();