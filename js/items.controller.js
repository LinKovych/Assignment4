(function () {
'use strict';

angular.module('Data')
.controller('CategoryDescriptionCtrl', CategoryDescriptionCtrl);

CategoryDescriptionCtrl.$inject = ['MenuDataService', '$stateParams', 'items'];
function CategoryDescriptionCtrl (MenuDataService, $stateParams, items) {
	var ctrl = this;
	ctrl.items = items;
}

})();