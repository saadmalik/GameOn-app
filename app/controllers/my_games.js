/* Add create game button for iOS */
if (OS_IOS) {
  $.myGamesWindow.rightNavButton = Ti.UI.createButton({
    title: 'Create',
    backgroundImage: '/images/ios/create_game_button.png',
    width: '58dp',
    height: '29dp',
    font: {fontSize: '12dp', fontWeight: 'bold'}
  });
}
