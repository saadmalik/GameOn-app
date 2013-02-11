var globals = require('alloy').Globals;

/**
 * @param method HTTP method to be used. Accepts, GET, POST, PUT, and DELETE.
 * @param url The route of the api we want to hit (e.g. games/join).
 * @param parameters Parameters of the request. Inserted in the url for GET.
 * @param callback The callback function to invoke after the request is made.
*/
module.exports = function(method, url, parameters, callback) {

  // If no parameters are needed, let callback be 3rd argument
  if (callback === undefined) {
    callback = parmeters;
    parameters = undefined;
  }

  // Validate arguments to this function
  if (! (method && url && callback) ) {
    callback({error: 'Missing necessary argument(s) to this function.'}, null);
    return;
  } else if (['GET', 'POST', 'PUT', 'DELETE'].indexOf(method) < 0) {
    callback({error: 'Unknown method specified for request.'}, null);
    return;
  }

  // Authorize request for the API by generating signature
  var call_id = Math.random().toString(36).substring(3);
  var signature = Ti.md5HexDigest(
    Ti.md5HexDigest(globals.api_secret + call_id) +
    globals.api_secret
  );
  url += '?api_key=' + globals.api_key + '&call_id=' + call_id;
  url += '&signature=' + signature;

  // If user is logged in, put uid and token into url
  if (Ti.App.Properties.getBool('logged_in')) {
    url += '&uid=' + Ti.App.Properties.getString('uid');
    url += '&token=' + Ti.App.Properties.getString('token');
  }

  // Put parameters in url if it's a GET request
  if (method === 'GET') {
    for (var param in parameters) {
      if (parameters.hasOwnProperty(param)) {
        url += '&' + param + '=' + parameters.param;
      }
    }
    parameters = undefined;
  }

  // Create client to open connection and send request
  var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
      callback(null, this);
    },
    onerror: function(e) {
      callback(this, null);
    },
    timeout: 5000
  });
  xhr.open(method, globals.api_url + url);
  xhr.send(parameters),
};
