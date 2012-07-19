module.exports = function() {
	var self = Ti.UI.createWindow({
		title: 'Nearby',
    backgroundImage: 'images/bg-noise-pattern.png'
	});
	
  var NearbyView = require('ui/common/NearbyView')();
  self.add(NearbyView);
	
	return self;
};

