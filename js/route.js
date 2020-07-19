(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'templates/home.template.html'
	})

	.state('categoriesList', {
		url: '/categories',
		templateUrl: 'templates/categories.template.html',
		controller: 'CategoriesListCtrl as categoriesList',
		resolve: {
			categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
		}
	})

	.state('categoryDescription', {
		url: '/categoryDescription/{itemId}',
		templateUrl: 'templates/items.template.html',
		controller: 'CategoryDescriptionCtrl as categoryDescription',
		resolve: {
			items: ['$stateParams', 'MenuDataService', 
			function ($stateParams, MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function (categories) {
        	return MenuDataService.getItemForCategory(categories[$stateParams.itemId].short_name);
        })
      }]
		}
	});

}
})();