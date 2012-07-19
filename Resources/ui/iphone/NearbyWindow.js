module.exports = function() {
	var self = Ti.UI.createWindow({
		title: 'Nearby',
		barImage: 'images/titleBar.png'
	});
	
  var NearbyView = require('ui/common/NearbyView')();
  self.add(NearbyView);

  var line = Ti.UI.createView({
    height: Ti.UI.FILL,
    width: '5',
    backgroundColor: '#444',
    opacity: 0.1,
    left: '9%',
    zIndex: 2
  });
  self.add(line);
	
	return self;
};

