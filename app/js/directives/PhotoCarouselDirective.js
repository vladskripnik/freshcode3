'use strict';
/*Directive for Photocarousel*/
phonecatApp.directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
					loop: true,
					autoplay: true,
					smartSpeed: 350,
					responsive:{
        		0:{
            		items:1
        		},
		        550:{
		            items:4
		        },
		        700:{
		        	items:6	
		        },            
		        950:{
		            items:8
		        },
		        1200:{
		            items:10
		        },
		        1300:{
		            items:12
		        }
    		}
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				$(element).owlCarousel(defaultOptions);
			};
		}
	};
})
phonecatApp.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
}]);
