/* Add create button for iOS */
if (OS_IOS) {
  $.nearbyWindow.rightNavButton = Ti.UI.createButton({
    title: 'Create'
  });
}

/* Sample Games Response */
var games = [
  {id: '12345', sport: "soccer", distance: '0.2', comment_count: 5,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1351923356284 }
  },
  {id: '12345', sport: "soccer", distance: '0.2', comment_count: 1,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1351923530557 }
  },
  {id: '12345', sport: "soccer", distance: '0.2', comment_count: 0,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1351923356284 }
  },
  {id: '12345', sport: "soccer", distance: '0.2', comment_count: 7,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1351623356284 }
  },
  {id: '12345', sport: "soccer", distance: '0.2', comment_count: 2,
    nearby_user: {id: '007', name: 'Saad Malik',
    photo: '/images/profile-photo.png', timestamp: 1350623356284 }
  }
];

/* Add games to the scroll view */
for (var i = 0; i < games.length; i += 1) {
  var gameBox = Alloy.createController('game_box', games[i]).getView();
  $.scroller.add(gameBox);
}
