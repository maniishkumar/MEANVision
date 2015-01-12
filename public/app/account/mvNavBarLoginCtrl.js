angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http){
	$scope.signin = function(userName, password) {
		$http.post('/login',{userName:userName, password:password}).then(function(response){
			console.log(response.data);
			if(response.data.success){
				console.log("Successfully logged in");
			} else {
				console.log("Failed to login");
			}
		});
	}
});