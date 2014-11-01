// install   :   cordova plugin add https://github.com/pvsaikrishna/cordova-HTTP.git
// link      :   https://github.com/pvsaikrishna/cordova-HTTP/blob/master/README.md

angular.module('ngCordova.plugins.http', [])

  .factory('$cordovaHttp', ['$q', function ($q) {

    return {

      get: function (url, params, headers) {
        var q = $q.defer();

	     window.plugins.CordovaHttpPlugin.get(url, params, headers,
          function (data) {
             q.resolve(data);
          }, function (err) {
             q.reject(err);
          }
        );

        return q.promise;
      }
    };
  }]);
