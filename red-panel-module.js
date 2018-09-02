const redPanelModule = angular.module('RedPanel', [])

redPanelModule.directive('redPanel', function () {
    return {
        link: function ($scope, $element) {
            $element.css('border', '1px solid red').css('padding', '10px')
        }
    }
})