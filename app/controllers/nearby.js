Alloy.globals.tab1 = $.nearbyTab;
/* Add create game button for iOS */
if (OS_IOS) {
  $.nearbyWindow.rightNavButton = Ti.UI.createButton({
    title: 'Create',
    backgroundImage: '/images/ios/create_game_button.png',
    width: '58dp',
    height: '29dp',
    font: {fontSize: '12dp', fontWeight: 'bold'}
  });
}

/* Sample Games Response */
var games = [
  {id: '12345', sport: "basketball", spots: '10/15', distance: '0.1', comment_count: 5,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1353861484625 }
  },
  {id: '12345', sport: "soccer", spots: '11/12', distance: '0.2', comment_count: 1,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1353561484625 }
  },
  {id: '12345', sport: "paintball", spots: '7/10', distance: '0.8', comment_count: 0,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1353061484625 }
  },
  {id: '12345', sport: "tennis", spots: '15/16', distance: '1.2', comment_count: 7,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1352861484625 }
  },
  {id: '12345', sport: "hockey", spots: '3/10', distance: '1.9', comment_count: 2,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1352261484625 }
  }
];

/* Add games to the scroll view */
for (var i = 0; i < games.length; i += 1) {
  var gameBox = Alloy.createController('game_box', games[i]).getView();
  $.scroller.add(gameBox);
}
