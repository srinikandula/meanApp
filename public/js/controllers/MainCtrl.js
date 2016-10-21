// public/js/controllers/MainCtrl.js
angular.module('sampleApp').controller('MainController', function($scope, NerdService) {

    $scope.tagline = 'To the moon and back!';   
	$scope.nerd = {};

	NerdService.get(loadCallback);
	

    function loadCallback(data) {
    	$scope.nerds = data;
    }
    
    $scope.deleteNerd = function(id) {
    	NerdService.delete(id, loadCallback);
    }

    $scope.loadNerd = function(id) {
    	NerdService.loadNerd(id, function(data) {
    		$scope.nerd = data;
    	});
    }

    $scope.saveNerd = function() {
    	NerdService.save($scope.nerd, loadCallback);
    	$scope.nerd = {};
    }
});