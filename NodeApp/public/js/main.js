require(
	[ 
		"/lib/angular.js",
		"/lib/jquery.js",
		"/lib/bootStrap.js"
	],
	function ( $, Angular, BootStrap ) {
	  
	  angular.module("adminSchoolApp",[])
	  .controller("loginController",function($scope){
           $scope.loginInfo = {};
           $scope.loggedIn = 'Maintain you school effectively with our App';
	  });
	}
);