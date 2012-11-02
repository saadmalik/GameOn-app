/* Add create button for iOS */
if (OS_IOS) {
  $.nearbyWindow.rightNavButton = Ti.UI.createButton({
    title: 'Create'
  });
}

/* Add games to the scroll view */
for (var i = 0; i < 10; i += 1) {
  var gameBox = Alloy.createController('game_box').getView();
  $.scroller.add(gameBox);
}
