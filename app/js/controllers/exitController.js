'use strict';
/*exit Controller*/
phonecatApp.controller('exitCtrl',['$location',
	function($location) {
		localStorage.clear();
		//$location.path("#/");
	}
	]);