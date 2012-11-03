/* Add create button for iOS */
if (OS_IOS) {
  $.nearbyWindow.rightNavButton = Ti.UI.createButton({
    title: 'Create'
  });
}

var games = [
  "soccer",
  "basketball",
  "football",
  "frisbee",
  "volleyball",
  "soccer",
  "basketball",
  "football",
  "frisbee",
  "volleyball"
];

/* Add games to the scroll view */
for (var i = 0; i < 9; i += 1) {
  var gameBox = Alloy.createController('game_box', {sport: games[i]}).getView();
  $.scroller.add(gameBox);
}
