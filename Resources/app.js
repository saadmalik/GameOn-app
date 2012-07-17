// This is a single context application with mutliple windows in a stack
(function() {
	var osname = Ti.Platform.osname;
	
	var Window;
	if (osname === 'android') {
		Window = require('ui/android/ApplicationWindow');
	}
	else {
		Window = require('ui/iphone/ApplicationWindow');
	}

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup(Window).open();
})();
