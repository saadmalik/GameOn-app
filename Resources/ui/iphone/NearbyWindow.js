module.exports = function() {
	var self = Ti.UI.createWindow({
		title: 'Nearby',
    backgroundColor: '#ebe8e2',
    //backgroundImage:
	});
	
  var NearbyView = require('ui/common/NearbyView')();
  self.add(NearbyView);
	
	return self;
};

