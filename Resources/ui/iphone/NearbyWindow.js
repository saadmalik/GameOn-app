module.exports = function() {
	var self = Ti.UI.createWindow({
		title: 'Nearby',
		barImage: 'images/titleBar.png',
		backgroundColor:'black'
	});
	
	var buttonAdd = Ti.UI.createButton({
		backgroundImage: 'images/buttonAdd.png',
		width:44,
		height:32
	});
	
	self.setRightNavButton(buttonAdd);
	
  var NearbyView = require('ui/common/NearbyView')();
  self.add(NearbyView);

	
	return self;
};

