module.exports = function() {
	var self = Ti.UI.createWindow({
		title: 'Game Info',
		barImage: 'images/titleBar.png',
		backgroundColor:'black'
	});
		
  var GameDetailView = require('ui/common/GameDetailView')();
  self.add(GameDetailView);
	
	return self;
};

