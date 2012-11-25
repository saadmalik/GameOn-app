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
  xhr.open('POST', api_url);
  xhr.send(user);
};


exports.login = function(user, callback) {
};
