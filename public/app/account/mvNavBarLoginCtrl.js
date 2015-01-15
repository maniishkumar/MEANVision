angular.module('app').controller('mvNavBarLoginCtrl', function($scope, mvIdentity, mvNotifier, mvAuth, $location){
	$scope.identity = mvIdentity;
	$scope.signin = function(username, password) {
		mvAuth.authenticateUser(username, password).then(function(success){
			if(success) {
				mvNotifier.notify('You  are successfully logged in');
			} else {
				mvNotifier.notify('Username/password combination is not correct');
			}
		});
	}

	$scope.signout = function() {
		mvAuth.logoutUser().then(function(){
			$scope.username = "";
			$scope.lastName = "";
			mvNotifier.notify('You have successfully signed out!');
			$location.path('/');

		})
	}
});