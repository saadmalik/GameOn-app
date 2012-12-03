var args = arguments[0] || {};

Ti.API.info("ARGUMENTS PASSED TO GAME DETAIL: " + JSON.stringify(args));

if (OS_IOS) {
   var leftButton = Ti.UI.createButton({
    title: ' Nearby',
    backgroundImage: '/images/game_detail/backButton.png',
    width: '58dp',
    height: '29dp',
    font: {fontSize: '12dp', fontWeight: 'bold'}
  });
  leftButton.addEventListener('click', function(){
    Alloy.globals.tabgroup.activeTab.close($.gameDetail);
  });
  $.gameDetail.leftNavButton = leftButton;

  $.gameDetail.rightNavButton = Ti.UI.createButton({
    backgroundImage: '/images/game_detail/share.png',
    width: '43dp',
    height: '29dp'
  });
}
