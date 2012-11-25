var api_key = Alloy.CFG.api_key;
var api_url = Alloy.CFG.api_url;

exports.register = function(user, callback) {
  var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
      var response = JSON.parse(this.responseText);
      if (response.error) {
        callback(response, null);
      }
      else {
        callback(null, response);
      }
    },
    onerror: function(e) {
      callback({error: 'Request failed to process'}, null);
    },
    timeout: 5000
  });

  user.api_key = api_key;
  xhr.open('POST', api_url+'users/create');
  xhr.send(user);
};


exports.login = function(user, callback) {
  var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
      var response = JSON.parse(this.responseText);
      if (response.error) {
        callback(response, null);
      }
      else {
        callback(null, response);
      }
    },
    onerror: function(e) {
      callback({error: 'Request failed to process'}, null);
    },
    timeout: 5000
  });

  user.api_key = api_key;
  xhr.open('POST', api_url+'/login');
  xhr.send(user);
};
