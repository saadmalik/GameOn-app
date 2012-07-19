module.exports = function() {
	var self = Ti.UI.createWindow({
		title: 'Nearby',
	});
	
  var NearbyView = require('ui/common/NearbyView')();
  self.add(NearbyView);
	
	return self;
};

