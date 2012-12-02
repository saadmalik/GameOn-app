var args = arguments[0] || {};

Ti.API.info("ARGUMENTS PASSED TO GAME DETAIL: " + JSON.stringify(args));

$.gameDetail.rightNavButton = Ti.UI.createButton({
	backgroundImage: 'images/gameDetail/share.png',
	width: '43dp',
	height: '29dp'
});