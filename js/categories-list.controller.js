(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListCtrl', CategoriesListCtrl);

CategoriesListCtrl.$inject = ['MenuDataService', 'categories'];
function CategoriesListCtrl (MenuDataService, categories) {
	var ctrl = this;
	ctrl.categories = categories;
}

})();