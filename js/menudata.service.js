(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('categoriesPath', 'https://davids-restaurant.herokuapp.com/categories.json')
.constant('categoryItemsPath', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

MenuDataService.$inject = ['$http', 'categoriesPath', 'categoryItemsPath'];
function MenuDataService($http, categoriesPath, categoryItemsPath) {

	var service = this;
	var categories = [];

	service.getAllCategories = function () {

		return $http({
			method: 'GET',
			url: (categoriesPath)
		})
		.then(function (result) {
			categories = result.data;
			return categories;
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	var categoryDescription = [];

	service.getItemForCategory = function (categoryShortName) {
		return $http({
			method: 'GET',
			url: (categoryItemsPath + categoryShortName)
		})
		.then(function (result) {
			categoryDescription = result.data.menu_items;
			return categoryDescription;
		})
		.catch(function (error) {
			console.log(error);
		});
	}


	// service.getCategoryById = function (categoryId) {
	// 	for (var i = 0; i < categories.length; i++) {
	// 		if (i == categoryId) {
	// 			categoryDescription = getItemForCategory(categories[i].short_name);
	// 			return categoryDescription;
	// 		}
	// 	}
	// }

}

})();