function AppTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var NearbyWindow = new require(global.basePath + 'NearbyWindow')();
	var MyGamesWindow = new require(global.basePath + 'MyGamesWindow')();
	var ProfileWindow = new require(global.basePath + 'ProfileWindow')();
	
	var tab1 = Ti.UI.createTab({
		title: 'Nearby',
		icon: '/images/KS_nav_ui.png',
		window: NearbyWindow,
    backgroundColor: '#222'
	});
	
	var tab2 = Ti.UI.createTab({
		title: 'My Games',
		icon: '/images/KS_nav_views.png',
    backgroundColor: '#222',
		window: MyGamesWindow
	});
	
	var tab3 = Ti.UI.createTab({
		title: 'Profile',
		icon: '/images/KS_nav_views.png',
    backgroundColor: '#222',
		window: ProfileWindow
	});

	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	
	return self;
};

module.exports = AppTabGroup;
