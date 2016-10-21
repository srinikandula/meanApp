// public/js/services/NerdService.js
angular.module('sampleApp').factory('NerdService', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function(callback) {
            $http.get('/api/nerds').then(function(response) {
                callback(response.data);
            });
        },
        save : function(nerdData, callback) {
            if(nerdData._id) {
                $http.put('/api/nerd/'+nerdData._id, nerdData).then(function(response) {
                    callback(response.data);
                });
            } else {
               $http.post('/api/nerd', nerdData).then(function(response) {
                    callback(response.data);
                }); 
            }
            
        },
        loadNerd : function(id, callback) {
            $http.get('/api/nerd/' + id).then(function(response) {
                callback(response.data);
            });
        },
        delete : function(id, callback) {
            $http.delete('/api/nerd/' + id).then(function(response) {
                callback(response.data);
            });
        }
    }       

}]);